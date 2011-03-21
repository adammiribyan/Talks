class RemovePictureFromWeeks < ActiveRecord::Migration
  def self.up
    remove_column :weeks, :picture
  end

  def self.down
  end
end
