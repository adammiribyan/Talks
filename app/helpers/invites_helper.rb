# coding: utf-8

module InvitesHelper
  
  def invite_letter_subject
    if current_user
      if current_user.firstname.empty?
        name = ""
      else
        name = "(#{current_user.fullname})"
      end
      
      return "Тема: <span>#{current_user.username.to_s} #{name.to_s} приглашает вас на Talks</span>"
    end
  end
  
end
