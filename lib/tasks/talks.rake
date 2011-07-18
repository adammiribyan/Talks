namespace :posts do  
  desc "Set the is_hidden value to false to all posts unless is_hidden is true"
  task :populate_is_hidden => :environment do
    Post.all.each do |post|
      unless post.is_hidden == true
        post.update_attribute(:is_hidden, false)
      end
    end
  end
end