class User < ApplicationRecord
	has_many :completed_words
	has_many :sight_words, through: :completed_words

	has_secure_password
end
