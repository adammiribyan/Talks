class CreateApplicants < ActiveRecord::Migration
  def self.up
    create_table :applicants do |t|
      t.string :email

      t.timestamps
    end
  end

  def self.down
    drop_table :applicants
  end
end
