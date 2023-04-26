class ResetGuestsTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :guests, force: :cascade
    create_table :guests do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.boolean :family
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end
  end
end
