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
  
  def invites_left_count
    if current_user and current_user.invites_limit > 0      
      declinated_name = Russian.p(current_user.invites_limit, "приглашение", "приглашения", "приглашений")
      
      return "У вас <strong>#{current_user.invites_limit}</strong> #{declinated_name}"
    end
  end
  
end
