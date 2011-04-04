# coding: utf-8

class PostsController < ApplicationController 
  
  before_filter :authenticate, :except => [:index, :show, :recent, :search]
  before_filter :show_picture_preview, :show_additional_details, :only => [:edit, :update]  
  before_filter :set_the_user_to_posts, :except => [:edit, :update, :show, :recent, :search]
  before_filter :set_the_user_to_post, :only => :show
  before_filter :set_the_week_if_exists, :only => [:new, :create, :edit, :update]
  
  load_and_authorize_resource :user, :find_by => :username
  load_and_authorize_resource :post, :through => :user, :shallow => true, :except => [:recent, :search]
  
 
  def index
    @posts = @user.posts.order("created_at desc")
    
    respond_with(@posts)
  end
  
  def user_songs
    @songs = Post.songs.where_user_is(@user)
  end
  
  def search
    @query = params[:query].to_s
    @posts = Post.search @query, :page => params[:page], :per_page => 20   
  end
    
  def recent
    @posts = Post.all :order => 'created_at desc'
    
    respond_with(@posts) do |format|
      format.rss { render :layout => false }
    end
  end
  
  def show
    #@post = Post.find(params[:id])    
    respond_with(@post)
  end

  def new    
    #@post = @user.posts.new
    
    if @show_week_header
      posts_count = @week.posts.count.to_i + 1
    else
      posts_count = @user.posts.count.to_i + 1
    end    
    @post.title = "§ #{posts_count}. " # Adding paragraphe sign
    
    respond_with(@post)
  end

  def edit    
    #@post = Post.find(params[:id])    
  end

  def create
    @post = @user.posts.new(params[:post])    
    @post.title = @post.title.strip.chomp(".") # Formatting post title
    @post.save    
    respond_with(@post)
  end

  def update
    authorize! :assign_featured, @post if params[:post][:assign_featured]
    
    #@post = Post.find(params[:id])
    @post.update_attributes(params[:post])
    respond_with(@post)
  end

  def destroy
    #@post = Post.find(params[:id])
    @post.destroy
    redirect_to user_posts_url(current_user) # hmm... current_user works, instead of @user
  end
  
  
  private
  
      def set_the_user_to_posts
        @user = User.find_by_username(params[:id])
      end
      
      def set_the_user_to_post
        unless params[:id].empty? or params[:id].nil?
          @user = Post.find_by_id(params[:id]).user
        end
      end
      
      def set_the_week_if_exists
        if params[:week].present? && @week = Week.find_by_slug(params[:week]) 
          if @week.is_active?
            @show_week_header = true
          else
            redirect_to @week, :notice => "Вы не можете добавлять параграфы в закрытую неделю."
          end          
        else
          @show_week_header = false
        end
      end
    
      def show_picture_preview
        @show_picture_preview = true
      end
    
      def show_additional_details
        @show_additional_details = true
      end
    
end
