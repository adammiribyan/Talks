Talks::Application.routes.draw do
  resources :weeks do
    member do
      get "/status/:value" => "weeks#update_status", :as => :update_status
      get "/posts" => "weeks#posts"
    end
  end
  
  resources :applicants  
  resources :invites, :only => [:new, :create]
  
  resources :users, :shallow => true do
    resources :posts do
      get "/trigger_visibility" => "posts#trigger_visibility", :as => :trigger_visibility, :on => :member
    end
        
    get "/statistics" => "users#statistics", :as => :statistics, :on => :collection
    
    member do
      get "/playlist" => "users#playlist", :as => :playlist
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
  
  root :to => "home#index"  
end
