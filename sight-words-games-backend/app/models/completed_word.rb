class CompletedWord < ApplicationRecord
	belongs_to :user
	belongs_to :sight_word

	def user_completion_update
		self.user.completion_update
	end

end
