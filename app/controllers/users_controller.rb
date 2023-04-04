class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: {errors: user.errorss.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "No user currently logged in"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

end
