class AddFeaturedToPost < ActiveRecord::Migration
  def self.up
    add_column :posts, :featured, :boolean
  end

  def self.down
  end
end
