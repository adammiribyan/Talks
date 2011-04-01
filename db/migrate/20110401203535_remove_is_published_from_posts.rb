class RemoveIsPublishedFromPosts < ActiveRecord::Migration
  def self.up
    remove_column :posts, :is_published
  end

  def self.down
  end
end
