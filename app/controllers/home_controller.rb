class HomeController < ApplicationController
  
  def index
    @features = Post.published.featured.all :order => 'updated_at desc', :limit => 2
    @latest_posts = Post.published.all :order => 'created_at desc', :limit => 10
    @popular_posts = Post.published.all :order => 'created_at desc', :limit => 4
  end
  
end
