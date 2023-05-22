class EventsController < ApplicationController

    before_action :authorize

    def create
        event = current_user.events.create!(event_params)
        render json: event, status: :created
    end

    def index
        events = current_user.events.all
        render json: events
    end

    def update
        event = current_user.events.find(params[:id])
        event.update!(event_params)
        render json: event
    end

    def destroy
        event = current_user.events.find(params[:id])
        event.destroy
    end

    private

    def event_params
        params.permit(:name, :date, :time, :location, :description, :photo_url)
    end

end
