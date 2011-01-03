set :user, 'adam'

set :application, "talks"

role :app, "t-a-l-k-s.com"
role :web, "t-a-l-k-s.com"
role :db,  "t-a-l-k-s.com", :primary => true

set :scm, "git"
set :repository,  "git@github.com:adammiribyan/Talks.git"
set :deploy_via, :remote_cache

ssh_options[:forward_agent] = true
default_run_options[:pty] = true

set :keep_releases, 10
set :use_sudo, false

set :branch, "master"
set :deploy_to, "/home/#{user}/webapps/#{application}"

namespace :deploy do
  desc "Restart application"
  task :restart, :roles => :app do
    run "touch #{current_path}/tmp/restart.txt"
  end
end


task :after_symlink, :roles => [:web, :app] do
  run "perl -i -pe \"s/# ENV\\['RAILS_ENV'\\] \\|\\|= 'production'/ENV['RAILS_ENV'] ||= 'production'/\" #{current_path}/config/environment.rb"
end
