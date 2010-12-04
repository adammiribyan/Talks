class Ability
  
  include CanCan::Ability
  
  def initialize(user)
    alias_action :update, :to => :edit_profile
    alias_action :update, :to => :edit_account
    alias_action :update, :to => :update_profile
    alias_action :update, :to => :update_account
    
    user ||= User.new   
    
    case user.role.to_s
      when "admin"
        can :manage, :all
        can :assign_featured, Post
        can :assign_roled, User
      when "author"
        can :read, :all
        can :create, Post
        can :update, Post do |post|
          post.try(:user) == user
        end
        can :update, User do |author|
          author == user
        end
      else
        can :read, :all
    end    
  end
  
end