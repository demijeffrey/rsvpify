class GuestsController < ApplicationController

    def create
        # event = Event.find_by(params[:event_id])
        guest = current_user.guests.create!(guest_params)
        render json: guest, status: :created
    end

    def index
        guests = Guest.all
        render json: guests
    end

    def update
        guest = current_event.guests.find(params[:id])
        guest.update!(guest_params)
        render json: guest
    end

    def destroy
        guest = Guest.find(params[:id])
        guest.destroy
    end

    private

    def guest_params
        params.permit(:first_name, :last_name, :email, :family)
    end

    def current_event
        Event.find_by(params[:event_id])
    end

end
