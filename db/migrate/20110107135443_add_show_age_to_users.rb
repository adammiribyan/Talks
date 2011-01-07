class AddShowAgeToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :show_age, :boolean
  end

  def self.down
    remove_column :users, :show_age
  end
end
