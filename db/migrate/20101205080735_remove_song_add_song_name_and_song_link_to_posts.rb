class RemoveSongAddSongNameAndSongLinkToPosts < ActiveRecord::Migration
  def self.up
    remove_column :posts, :song
    add_column :posts, :song_title, :string
    add_column :posts, :song_link, :string
  end

  def self.down
  end
end
