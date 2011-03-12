class CreateWeeks < ActiveRecord::Migration
  def self.up
    create_table :weeks do |t|
      t.string :name
      t.string :slug
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :weeks
  end
end
