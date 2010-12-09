class AddInvitesToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :invite_id, :integer
    add_column :users, :invites_limit, :integer
  end

  def self.down
    remove_column :users, :invites_limit
    remove_column :users, :invite_id
  end
end
