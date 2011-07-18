class AddIsHiddenToPosts < ActiveRecord::Migration
  def self.up
    add_column :posts, :is_hidden, :boolean
  end

  def self.down
    remove_column :posts, :is_hidden
  end
end
