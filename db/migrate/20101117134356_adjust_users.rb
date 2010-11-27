class AdjustUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :firstname, :string
    add_column :users, :lastname, :string
    add_column :users, :gender, :string
    add_column :users, :birthday, :date
    add_column :users, :city, :string
    add_column :users, :about, :text
    add_column :users, :contacts, :text
  end

  def self.down
  end
end
