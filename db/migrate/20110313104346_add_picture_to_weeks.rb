class AddPictureToWeeks < ActiveRecord::Migration
  def self.up
    add_column :weeks, :picture, :string
  end

  def self.down
    remove_column :weeks, :picture
  end
end
