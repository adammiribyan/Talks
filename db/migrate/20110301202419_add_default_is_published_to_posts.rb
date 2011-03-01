class AddDefaultIsPublishedToPosts < ActiveRecord::Migration
  def self.up
    change_column_default :posts, :is_published, true
  end

  def self.down
  end
end
