class User < ApplicationRecord
	has_many :completed_words
	has_many :sight_words, though: :completed_words
end
