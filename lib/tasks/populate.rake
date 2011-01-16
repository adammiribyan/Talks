namespace :db do  
  desc "Erase and fill the database"
  task :populate => :environment do
    require 'populator'
    require 'faker' 
    
    [User, Post].each(&:delete_all)
    
    User.populate 50 do |author|
      author.username = Populator.words(1)
      author.email = Faker::Internet.email
      author.roles_mask = 4
      author.city = Faker::Address.city
      author.firstname = Faker::Name.first_name
      author.lastname = Faker::Name.last_name
      author.about = Faker::Lorem.paragraph
      author.invites_limit = 5
      author.birthday = 20.years.ago..Time.now
      author.email_confirmed = true
      author.encrypted_password = '4de51d4baaac2ab35bf7df9f63eb7307758483a6' 
      author.salt = 'd42437263d026990b25d0e8970bee6bb2bdb6d4d'
      author.confirmation_token = '7e005fe89d4736fa7027f67c402a559cb94e50f3'
      # Paperclip permanently fake data
      author.picture_file_name = 'love_waits_b952741.jpg'
      author.picture_content_type = 'image/jpeg'
      author.picture_file_size = '195775'
      author.picture_updated_at = '2011-01-04 05:05:11'
      
      Post.populate 10..30 do |post|
        post.user_id = author.id
        post.title = Populator.words(1..5).titleize
        post.conversation = Faker::Lorem.paragraph
        post.song_code = '<object height="23" width="200"><param name="movie" value="http://www.weborama.ru/flash/widget/playerwidget2.swf"><param name="wmode" value="transparent"><param name="FlashVars" value="id=3d3203209ada7b98db5e1335e9115f30&type=audio&limit=1"><embed height="23" width="200" flashvars="id=3d3203209ada7b98db5e1335e9115f30&type=audio&limit=1" wmode="transparent" type="application/x-shockwave-flash" src="http://www.weborama.ru/flash/widget/playerwidget2.swf"/></object>'
        post.created_at = 2.years.ago..Time.now        
        # Paperclip permanently fake data
        post.picture_author_link = Faker::Internet.domain_name
        post.picture_file_name = 'love_waits_b952741.jpg'
        post.picture_content_type = 'image/jpeg'
        post.picture_file_size = '195775'
        post.picture_updated_at = '2011-01-04 05:05:11'
      end
    end
  end
end