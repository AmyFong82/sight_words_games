class CompletedWord < ApplicationRecord
	belongs_to :user
	belongs_to :sight_word

  	def completed_word_id_spelling
  		id = self.sight_word_id
  		spelling = self.sight_word.spelling
		return id, spelling
	end

	def user_completion_update
		self.user.completion_update
	end

end
