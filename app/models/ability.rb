class Ability
  
  include CanCan::Ability
    
  def initialize(user)
    user ||= User.new
    
    case user.role.to_s
      when "admin"
        can :manage, :all
      when "author"
        can :read, :all
        can :create, Post
        can :update, Post do |post|
          post.try(:user) == user
        end
      else
        can :read, :all
    end    
  end
  
end