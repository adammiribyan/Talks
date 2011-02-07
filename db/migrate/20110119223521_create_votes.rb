class CreateVotes < ActiveRecord::Migration
  def self.up
    create_table :votes do |t|
      t.string :operator
      t.string :type
      t.integer :post_id
      t.integer :user_id

      t.timestamps
    end
  end

  def self.down
    drop_table :votes
  end
end
