class CreatePromises < ActiveRecord::Migration
  def change
    create_table :promises do |t|
      t.string :name

      t.timestamps
    end
  end
end
