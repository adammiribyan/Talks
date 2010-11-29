class Ability
  
  include CanCan::Ability
    
  def initialize(user)
    user ||= User.new
    
    if user.role == "admin"
      can :manage, :all
    else
      can :read, :all
      
      if user.role == "author"
        can :create, Post
        can :update, Post do |post|
          post.try(:user) == user
        end
      end
      
    end
  end
  
end