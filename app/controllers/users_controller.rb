# encoding: utf-8

class UsersController < Clearance::UsersController
  
  before_filter :set_the_user, :only => [:playlist, :edit_account, :edit_profile, :update_account, :update_profile]
  before_filter :authenticate, :only => [:edit_account, :edit_profile]
  
  def statistics
    # all users count
    @users_count = User.count
    # male users percent
    @male_users_percent = User.count(:all, :conditions => ["gender = ?", "m"]) * 100 / User.count  
    # femail users percent
    @female_users_percent = User.count(:all, :conditions => ["gender = ?", "f"]) * 100 / User.count
    # first post created at
    @first_post = Post.first
    @first_post_created_at = I18n.l(@first_post.created_at.to_date)
    # all posts count
    @all_posts_count = Post.count
  end
  
  def new
    render '/shared/facebook'
  end
  
  def edit_account
    authorize! :update, @user
  end
  
  def edit_profile
    authorize! :update, @user
  end
  
  def playlist
    @posts = Post.where_user_is(@user).order("created_at DESC")
  end

  def update_account
    authorize! :update, @user
    authorize! :assign_roles, @user if params[:user][:assign_roles]
    authorize! :assign_invites, @user if params[:user][:assign_invites]
    
    if @user.update_attributes(params[:user])
      redirect_to account_settings_user_path, :notice => "Account saved."
    else
      render :template => 'users/edit_account'
    end
  end
  
  def update_profile
    authorize! :update, @user

    if @user.update_attributes(params[:user])
      redirect_to profile_settings_user_path, :notice => "Profile saved."
    else
      render :template => 'users/edit_profile'
    end
  end
  
  # Пока что, данным методом выводим все посты, созданные пользователем.
  # В след. версиях -- профиль пользователя.
  def show
    @user = User.find_by_username(params[:id])    
    @posts = User.find_by_username(params[:id]).posts.find(:all, :order => 'created_at desc')
    
    render :template => "/posts/index"
  end
  
  # In case of requesting:
  # http://localhost:3000/users/:user/settings/
  def redirect_to_settings
    redirect_to profile_settings_user_path(@user)
  end
  

  private
    
    def set_the_user
      @user = User.find_by_username(params[:id])
    end
end
