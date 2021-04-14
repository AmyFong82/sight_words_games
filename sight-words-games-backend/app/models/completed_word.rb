class CompletedWord < ApplicationRecord
	belongs_to :user
	belongs_to :sight_word

  	def completed_word_with_spelling
		SightWord.find(self.sight_word_id).spelling
	end

end
