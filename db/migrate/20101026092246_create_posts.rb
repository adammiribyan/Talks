class CreatePosts < ActiveRecord::Migration
  def self.up
    create_table :posts do |t|
      t.string :title
      t.string :url
      t.string :picture
      t.string :picture_author
      t.string :picture_author_link
      t.string :song
      t.text :conversation
      t.text :note
      t.string :place
      t.integer :user_id

      t.timestamps
    end
  end

  def self.down
      drop_table :posts
  end
end
