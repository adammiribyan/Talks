class HomeController < ApplicationController
  
  def index
    @features = Post.featured.all :order => 'created_at desc', :limit => 2
    @posts = Post.all :order => 'created_at desc'
  end
  
end
