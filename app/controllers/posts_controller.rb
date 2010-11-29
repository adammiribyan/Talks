class PostsController < ApplicationController 
  
  before_filter :authenticate, :except => [:index, :show]
  before_filter :show_picture_preview, :only => [:edit, :update]
  before_filter :set_the_user, :except => [:edit, :update, :show]
  
  load_and_authorize_resource :user
  load_and_authorize_resource :post, :through => :user, :shallow => true
 
  def index
    #@posts = @user.posts.all
    respond_with(@posts)
  end

  def show
    #@post = Post.find(params[:id])
    respond_with(@post)
  end

  def new    
    #@post = @user.posts.new
    respond_with(@post)
  end

  def edit    
    #@post = Post.find(params[:id])    
  end

  def create
    @post = @user.posts.create(params[:post])
    respond_with(@post)
  end

  def update
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
  
      def set_the_user
        @user = User.find_by_username(params[:user_id])
      end
    
      def show_picture_preview
        @show_picture_preview = true
      end
  
end
