class CompletedWord < ApplicationRecord
	belongs_to :user
	belongs_to :sight_word

  	def completed_word_id_spelling
  		id = self.sight_word_id
  		spelling = SightWord.find(self.sight_word_id).spelling
		return id, spelling
	end

end
