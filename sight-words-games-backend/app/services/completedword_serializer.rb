class CompletedWordSerializer

	def initialize(completedword_object)
		@completedword = completedword_object
	end

	def to_serialized_json
		@completedword.to_json(only: [:user_id, :sight_word_id])
	end
end