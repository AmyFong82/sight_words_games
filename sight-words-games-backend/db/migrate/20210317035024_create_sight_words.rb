class CreateSightWords < ActiveRecord::Migration[6.1]
  def change
    create_table :sight_words do |t|
      t.string :spelling
      t.string :audio
      t.string :sentence
      t.string :picture

      t.timestamps
    end
  end
end
