Talks::Application.routes.draw do

  resources :weeks do
    member do
      get "/status/:value" => "weeks#update_status", :as => :update_status
    end
  end

  resources :applicants
  
  resources :invites, :only => [:new, :create]
  
  resources :users, :shallow => true do
    resources :posts
    
    member do
      get "/settings" => "users#redirect_to_settings"
      get "/settings/profile" => "users#edit_profile", :as => :profile_settings
      get "/settings/account" => "users#edit_account", :as => :account_settings
      put "/settings/profile" => "users#update_profile", :as => :profile_settings
      put "/settings/account" => "users#update_account", :as => :account_settings
    end    
  end 
  
  match "/recent" => "posts#recent", :as => :recent_posts  
  match "/posts/:id/comments/count" => "posts#comments_count", :as => :post_comments_count
  match "/search" => "posts#search", :as => :search  
  
  get "/publish_all" => "posts#publish_all", :as => :publish_all
  
  root :to => "home#index"
end
