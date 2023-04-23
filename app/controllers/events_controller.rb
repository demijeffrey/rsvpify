class EventsController < ApplicationController

    def create
        event = current_user.events.create!(event_params)
        render json: event, status: :created
    end

    def index
        # events = Event.all
        events = current_user.events.all
        render json: events
    end

    def update
        event = current_user.events.find(params[:id])
        event.update!(event_params)
        render json: event
    end

    private

    def event_params
        params.permit(:name, :date, :time, :location, :description, :photo_url)
    end

end
