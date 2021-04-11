class UsersController < ApplicationController

	def index
		users = User.all
		render json: UserSerializer.new(users).to_serialized_json
	end

	def create
		user = User.new(username: params[:username], password: params[:password])

		if user.save
			render json: UserSerializer.new(user).to_serialized_json
		else
			render "Username has been taken. Please use another one."
		end
	end


	def show
		user = User.find(params[:id])
		render json: UserSerializer.new(user).to_serialized_json
	end

end
