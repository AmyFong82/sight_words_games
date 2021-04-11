class SightwordSerializer

	def initialize(sightword_object)
		@sightword = sightword_object
	end

	def to_serialized_json
		@sightword.to_json(except: [:created_at, :updated_at])
	end
end