class CompletedWordsController < ApplicationController

	def index
		completed_words = User.find(params[:user_id]).completed_words
		spelled_out_words = completed_words.map { |w| w.completed_word_with_spelling }
		render json: spelled_out_words
		# render json: CompletedwordSerializer.new(completed_words).to_serialized_json
	end
end
