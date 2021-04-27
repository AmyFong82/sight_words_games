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
			user = User.find_by(username: params[:username])
				if user.authenticate(params[:password])
					render json: UserSerializer.new(user).to_serialized_json
				else
					render plain: "Username Taken / Wrong password."
				end
		end
	end

end

