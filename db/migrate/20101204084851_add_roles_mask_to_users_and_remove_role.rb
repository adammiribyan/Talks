class AddRolesMaskToUsersAndRemoveRole < ActiveRecord::Migration
  def self.up
    remove_column :users, :role
    add_column    :users, :roles_mask, :integer
  end

  def self.down
  end
end
