class CompletedWordsController < ApplicationController

	def index
		completed_words = User.find(params[:user_id]).completed_words
		spelled_out_words = completed_words.map { |w| w.completed_word_id_spelling}
		render json: spelled_out_words
	end

	def create
		completed_word = CompletedWord.find_or_create_by(user_id: params[:user_id], sight_word_id: params[:sight_word_id])
		completed_word.user_completion_update
		render json: completed_word.user.completion_status
	end
end
