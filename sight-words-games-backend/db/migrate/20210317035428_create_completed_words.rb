class CreateCompletedWords < ActiveRecord::Migration[6.1]
  def change
    create_table :completed_words do |t|
      t.references :user, null: false, foreign_key: true
      t.references :sight_word, null: false, foreign_key: true

      t.timestamps
    end
  end
end
