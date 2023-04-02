class CreateInvitations < ActiveRecord::Migration[7.0]
  def change
    create_table :invitations do |t|
      t.belongs_to :event, null: false, foreign_key: true
      t.belongs_to :guest, null: false, foreign_key: true
      t.string :rsvp_status
      t.boolean :plus_one
      t.text :message
      t.string :token

      t.timestamps
    end
  end
end
