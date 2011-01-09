# coding: utf-8

class PostsController < ApplicationController 
  
  before_filter :authenticate, :except => [:index, :show]
  before_filter :show_picture_preview, :show_additional_details, :only => [:edit, :update]  
  before_filter :set_the_user_to_posts, :except => [:edit, :update, :show]
  before_filter :set_the_user_to_post, :only => :show
  
  load_and_authorize_resource :user, :find_by => :username
  load_and_authorize_resource :post, :through => :user, :shallow => true  
 
  def index    
    respond_with(@posts)
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
        @user = Post.find_by_id(params[:id]).user
      end
    
      def show_picture_preview
        @show_picture_preview = true
      end
    
      def show_additional_details
        @show_additional_details = true
      end
  
end
