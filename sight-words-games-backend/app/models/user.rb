class User < ApplicationRecord
	has_many :completed_words

	has_secure_password

	validates :username, uniqueness: true

end
