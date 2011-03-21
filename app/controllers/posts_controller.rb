# coding: utf-8

class PostsController < ApplicationController 
  
  before_filter :authenticate, :except => [:index, :show, :recent, :search]
  before_filter :show_picture_preview, :show_additional_details, :only => [:edit, :update]  
  before_filter :set_the_user_to_posts, :except => [:edit, :update, :show, :recent, :search]
  before_filter :set_the_user_to_post, :only => :show  
  before_filter :any_active_week?, :only => [:new, :create, :edit, :update]
  
  load_and_authorize_resource :user, :find_by => :username
  load_and_authorize_resource :post, :through => :user, :shallow => true, :except => [:recent, :search]
  
 
  def index
    unless current_user and current_user == @user
      @posts = @user.posts.published.order("created_at desc")
    else
      @posts = @user.posts.order("created_at desc")
    end
    respond_with(@posts)
  end
  
  def publish_all 
    if Post.update_all :is_published => true
      redirect_to :root, :notice => "All posts are marked as published."
    end
  end
  
  def search
    @query = params[:query].to_s
    @posts = Post.search @query, :page => params[:page], :per_page => 20   
  end
    
  def recent
    @posts = Post.published.all :order => 'created_at desc'
    
    respond_with(@posts) do |format|
      format.rss { render :layout => false }
    end
  end
  
  def comments_count
    session = ::Facebook.session
    @result = session.fql_query("select count from comments_info where xid='post_#{params[:id]}' and app_id='#{Facebook::CONFIG[:app_id]}'")
    @data = @result.map(&:values).flatten.shift
    
    respond_with(@posts) do |format|
      format.js { render :layout => false }
    end
  end

  def show
    #@post = Post.find(params[:id])
    @string_id = "post_#{@post.id.to_s}"
    
    respond_with(@post)
  end

  def new    
    #@post = @user.posts.new
    @post.title = "§ #{@user.posts.count.to_i + 1}. " # Adding paragraphe sign
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
    
      def show_picture_preview
        @show_picture_preview = true
      end
    
      def show_additional_details
        @show_additional_details = true
      end
    
      def any_active_week?
        @week = Week.current.first
        
        if @week.present?
          @week
        else
          nil
        end
      end
    
end
