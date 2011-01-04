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
  
  desc "Symlink shared configs and folders on each release."
  task :symlink_shared do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
    run "ln -nfs #{shared_path}/assets #{release_path}/public/assets"
  end
  
  desc "Sync the public/assets directory."
  task :assets do
    system "rsync -vr --exclude='.DS_Store' public/assets adam@t-a-l-k-s.com:#{shared_path}/"
  end  
end

namespace(:customs) do
  task :config, :roles => :app do
    run <<-CMD
      ln -nfs #{shared_path}/system/database.yml #{release_path}/config/database.yml
    CMD
  end
  task :symlink, :roles => :app do
    run <<-CMD
      ln -nfs #{shared_path}/system/assets #{release_path}/public/assets
    CMD
  end
end

desc "Remote console on the production appserver"
task :console, :roles => :app do
  input = ''
  run "cd #{current_path} && rails console production" do
    |channel, stream, data|
    next if data.chomp == input.chomp || data.chomp == ''
    print data
    channel.send_data(input = $stdin.gets) if data =~ /^(>|\?)>/
  end
end

after "deploy:update_code", "customs:config"
after "deploy:symlink","customs:symlink"
after "deploy", "deploy:cleanup"