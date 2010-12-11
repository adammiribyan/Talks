# coding: utf-8

module InvitesHelper
  
  def invite_letter_subject(user)
    if user
      if user.firstname.nil? or user.firstname.empty?
        name = user.username
      else
        name = user.fullname
      end
      
      return t('invites.subject', :sender => name.to_s)
    end
  end
  
  def invites_left_count
    if current_user and current_user.invites_limit > 0      
      declinated_name = Russian.p(current_user.invites_limit, "приглашение", "приглашения", "приглашений")
      
      return "У вас <strong>#{current_user.invites_limit}</strong> #{declinated_name}"
    end
  end
  
end
