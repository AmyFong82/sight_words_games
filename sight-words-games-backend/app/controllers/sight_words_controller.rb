class SightWordsController < ApplicationController

	def index
		sightwords = SightWord.all
		render json: SightwordSerializer.new(sightwords).to_serialized_json
	end

	def show
	end
end
