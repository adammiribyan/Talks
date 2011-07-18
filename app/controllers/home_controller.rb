class HomeController < ApplicationController
  
  def index
  
    @features = Post.where(:is_hidden => false).featured.order('updated_at desc').limit(2)
    @latest_posts = Post.order('created_at desc').limit(10)
    
    # Talks Weeks
    @last_week = Week.active.last
    if @last_week && @last_week.posts.where(:is_hidden => false).count > 0
      @last_week_posts = @last_week.posts.limit(4)
      @week_is_ready = true
    else
      @week_is_ready = false
    end
    
    @weeks = Week.find(:all, :order => "created_at DESC", :limit => 5)
  end
  
end
