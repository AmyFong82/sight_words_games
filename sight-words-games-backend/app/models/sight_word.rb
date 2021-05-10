class SightWord < ApplicationRecord
	has_many :completed_words
	has_many :users, through: :completed_words
end
