class AddIsActiveToWeeks < ActiveRecord::Migration
  def self.up
    add_column :weeks, :is_active, :boolean
  end

  def self.down
    remove_column :weeks, :is_active
  end
end
