class SightWordsController < ApplicationController

	def index
		sightwords = SightWord.all
		render json: SightwordSerializer.new(sightwords).to_serialized_json
	end

	def show
		sightword = SightWord.find(params[:id])
		render json: sightword
	end
end
