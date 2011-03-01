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
      can :assign_published, Post
      can :assign_roles, User
      can :assign_invites, User
      can :obtain_additional_details, Post
    else
      can :read, [Post, User]      
      can :create, Applicant # For beta only
    end
    
    if user.is? :author
      can :read, [Post, User]
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
    end
    
  end
  
end