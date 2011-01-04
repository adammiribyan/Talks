class UserMailer < ActionMailer::Base
  default :from => "noreply@t-a-l-k-s.com"  
  
  def invitation(invite)
    @invite = invite
    @sender = @invite.sender
    
    if @sender.firstname.nil? or @sender.firstname.empty?
      name = @sender.username
    else
      name = @sender.fullname
    end
    
    mail(:to => @invite.email, :subject => t('invites.subject', :sender => name.to_s))
  end
end
