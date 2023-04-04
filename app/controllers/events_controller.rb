class EventsController < ApplicationController

    def create
        event = current_user.events.create!(event_params)
        render json: event, status: :created
    end

    def index
        events = Event.all
        render json: events
    end

    private

    def event_params
        params.permit(:name, :date, :time, :location, :description, :photo_url)
    end

end
