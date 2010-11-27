class ApplicationController < ActionController::Base

  respond_to :html

  include Clearance::Authentication

  protect_from_forgery
  
  def set_user_language
    I18n.locale = "ru"
  end
  
end
