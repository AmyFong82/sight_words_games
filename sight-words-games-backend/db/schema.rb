# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_17_035428) do

  create_table "completed_words", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "sight_word_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["sight_word_id"], name: "index_completed_words_on_sight_word_id"
    t.index ["user_id"], name: "index_completed_words_on_user_id"
  end

  create_table "sight_words", force: :cascade do |t|
    t.string "spelling"
    t.integer "word_length"
    t.string "pronunciation_audio"
    t.string "sentence"
    t.string "picture"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "completion_status", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "completed_words", "sight_words"
  add_foreign_key "completed_words", "users"
end
