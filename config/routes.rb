Talks::Application.routes.draw do
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
  
  resources :pages
  
  root :to => "home#index"
end
