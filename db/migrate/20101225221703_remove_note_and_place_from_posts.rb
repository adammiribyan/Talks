class RemoveNoteAndPlaceFromPosts < ActiveRecord::Migration
  def self.up
    remove_column :posts, :note
    remove_column :posts, :place
  end

  def self.down
  end
end
