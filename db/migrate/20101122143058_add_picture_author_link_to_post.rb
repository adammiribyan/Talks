class AddPictureAuthorLinkToPost < ActiveRecord::Migration
  def self.up
    add_column :posts, :picture_author_link, :string
  end

  def self.down
    remove_column :posts, :picture_author_link
  end
end
