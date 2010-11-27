class UsersController < Clearance::UsersController
  
  before_filter :set_the_user, :only => [:edit_account, :edit_profile, :update_account, :update_profile]
  before_filter :authenticate, :only => [:edit_account, :edit_profile]
  
  
  
  def edit_account
  end
  
  def edit_profile
  end

  def update_account
    if @user.update_attributes(params[:user])
      redirect_to account_settings_path, :notice => "Account saved."
    else
      render :template => 'users/edit_account'
    end
  end
  
  def update_profile
    if @user.update_attributes(params[:user])
      redirect_to profile_settings_path, :notice => "Profile saved."
    else
      render :template => 'users/edit_profile'
    end
  end
  
  # Пока что, данным методом выводим все посты, созданные пользователем.
  # В след. версиях -- профиль пользователя.
  def show
    @posts = User.find_by_username(params[:id]).posts.find(:all)
    render :template => "/posts/index"
  end
  
  def create
    @user = ::User.new params[:user]
    
    # Assigning the user role to all new users
    @user.user = true
    
    if @user.save
      flash_notice_after_create
      redirect_to(url_after_create)
    else
      render :template => 'users/new'
    end
  end
  
  private
    
    def set_the_user
      @user = current_user
    end    
  
end
