class RemoveSongTitleAndLinkAddSongCode < ActiveRecord::Migration
  def self.up
    remove_column :posts, :song_title
    remove_column :posts, :song_link
    
    add_column :posts, :song_code, :text
  end

  def self.down
  end
end
