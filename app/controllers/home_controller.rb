class HomeController < ApplicationController
  
  def index
    @features = Post.featured.all :order => 'updated_at desc', :limit => 2
    @latest_posts = Post.all :order => 'created_at desc', :limit => 10
    @popular_posts = Post.all :order => 'created_at desc', :limit => 4
  end
  
end
