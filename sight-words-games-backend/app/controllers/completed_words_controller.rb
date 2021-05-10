class CompletedWordsController < ApplicationController

	def index
		completed_words = User.find(params[:user_id]).completed_words
		spelled_out_words = completed_words.map { |w| w.completed_word_id_spelling}
		render json: spelled_out_words
	end

	def create
		completed_word = CompletedWord.find_or_create_by(user_id: params[:user_id], sight_word_id: params[:sight_word_id])
		completed_word.user_completion_update
		updated_num = completed_word.user.completion_status
		render plain: updated_num.to_s
	end

	def destroy
		completed_words = CompletedWord.where(user_id: params[:user_id])
	    completed_words.delete_all
		user = User.find(params[:user_id])
		user.completion_status = 0
		user.save
		updated_num = 0
		render plain: updated_num.to_s
	end
end
