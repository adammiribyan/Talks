class ApplicationController < ActionController::Base
  
  helper_method :applicants_count # For beta only

  respond_to :html, :js, :rss

  include Clearance::Authentication

  protect_from_forgery
  
  def set_user_language
    I18n.locale = "ru"
  end
  
  rescue_from CanCan::AccessDenied do |exception|
    flash[:error] = "Access denied."
    redirect_to root_url
  end
  
  def applicants_count
    @count = Applicant.all.count

    if @count > 0
      "(#{@count.to_s})"
    else
      ""
    end
  end
  
end
