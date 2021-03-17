class SightwordSerializer

	def initialize(sightword_object)
		@sightword = sightword_object
	end

	def to_serialized_json
		@sightword.to_json(:only => [:id, :spelling])
	end
end