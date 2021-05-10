class User < ApplicationRecord

	has_many :completed_words
	has_many :sight_words, through: :completed_words

	has_secure_password

	validates :username, uniqueness: true


	def completion_update
		self.update(completion_status: self.completed_words.count)
	end

end
