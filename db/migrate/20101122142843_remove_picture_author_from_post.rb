class RemovePictureAuthorFromPost < ActiveRecord::Migration
  def self.up
    remove_column :posts, :picture_author
  end

  def self.down
  end
end
