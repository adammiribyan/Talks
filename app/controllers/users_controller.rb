class UsersController < Clearance::UsersController
  
  before_filter :set_the_user, :only => [:edit_account, :edit_profile, :update_account, :update_profile]
  before_filter :authenticate, :only => [:edit_account, :edit_profile]
  
  def new
    render '/shared/facebook'
  end
  
  def edit_account
    authorize! :update, @user
  end
  
  def edit_profile
    authorize! :update, @user
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
    @posts = User.find_by_username(params[:id]).posts.find(:all, :order => 'created_at desc')
    @user = User.find_by_username(params[:id])
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
