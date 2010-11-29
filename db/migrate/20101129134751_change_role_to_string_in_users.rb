class ChangeRoleToStringInUsers < ActiveRecord::Migration
  def self.up
    change_column :users, :role, :string
  end

  def self.down
  end
end
