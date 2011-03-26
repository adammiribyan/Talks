class HomeController < ApplicationController
  
  def index
    # @features = Post.published.featured.all :order => 'updated_at desc', :limit => 2
    @features = Post.published.featured.order('updated_at desc').limit(2)
    # @latest_posts = Post.published.all :order => 'created_at desc', :limit => 10
    @latest_posts = Post.published.order('created_at desc').limit(10)
    # @popular_posts = Post.published.all :order => 'created_at desc', :limit => 4
    @popular_posts = Post.published.order('created_at desc').limit(4)
    
    # Talks Weeks
    @last_week = Week.active.last
    if @last_week.posts.published.count > 0
      @last_week_posts = @last_week.posts.published.limit(4)
      @week_is_ready = true
    else
      @week_is_ready = false
    end
    
    @weeks = Week.find(:all, :order => "created_at DESC", :limit => 5)
  end
  
end
