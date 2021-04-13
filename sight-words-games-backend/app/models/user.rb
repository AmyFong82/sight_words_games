class User < ApplicationRecord
	has_many :sight_words

	has_secure_password

	validates :username, uniqueness: true

end
