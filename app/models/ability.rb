class Ability
  
  include CanCan::Ability
  
  def initialize(user)
    alias_action :update, :to => :edit_profile
    alias_action :update, :to => :edit_account
    alias_action :update, :to => :update_profile
    alias_action :update, :to => :update_account
    
    user ||= User.new
    
    if user.is? :admin
      can :manage, :all      
      can :assign_featured, Post
      can :assign_roled, User
      can :assign_invites, User
      can :obtain_additional_details, Post
    else
      can :read, [Post, User]      
      can :create, Applicant # For beta only
    end
    
    if user.is? :author
      can :read, :all
      can :create, Post
      can :update, Post do |post|
        post.try(:user) == user
      end
      can :update, User do |author|
        author == user
      end
    end
    
    if user.is? :moderator
      can :update, Post
      can :obtain_additional_details, Post do |post|
        post.try(:user) != user
      end
      can :read, Applicant # For beta only
    end
    
  end
  
end