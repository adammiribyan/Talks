# coding: utf-8
require 'digest/sha1'

class Invite < ActiveRecord::Base
  belongs_to :sender, :class_name => 'User'
  has_one :recipient, :class_name => 'User'
  
  validate :email, :presence => true
  validate :recipient_is_not_registered
  validate :sender_has_invites, :if => :sender
  
  before_create :generate_token
  before_create :decrement_sender_invites_count, :if => :sender
  
  private
    
    def recipient_is_not_registered
      errors.add :email, 'уже зарегистрирован' if User.find_by_email(email)
    end
  
    def sender_has_invites
      unless sender.invites_limit > 0
        errors.add :base, 'Вы использовали все приглашения, которые у вас были.'
      end
    end
  
    def generate_token
      self.token = Digest::SHA1.hexdigest([Time.now, rand].join)
    end
  
    def decrement_sender_invites_count
      sender.decrement! :invites_limit
    end
end
