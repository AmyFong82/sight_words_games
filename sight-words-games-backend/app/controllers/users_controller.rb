class UsersController < ApplicationController

	def create
		@user = User.new(name: params[:name], password: params[:password])

		if @user.save
			redirect_to user_path(@user)
		else

		end
	end

	def show
	end

end
