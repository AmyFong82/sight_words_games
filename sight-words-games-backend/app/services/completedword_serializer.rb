class CompletedwordSerializer

	def initialize(completedword_object)
		@completedword = completedword_object
	end

	def to_serialized_json
		@completedword.to_json(only: [:id, :spelling])
	end
end