class AddWeekIdToPosts < ActiveRecord::Migration
  def self.up
    add_column :posts, :week_id, :integer
  end

  def self.down
    remove_column :posts, :week_id
  end
end
