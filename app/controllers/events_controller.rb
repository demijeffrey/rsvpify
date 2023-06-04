class EventsController < ApplicationController

    before_action :authorize
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

    def create
        event = current_user.events.create!(event_params)
        render json: event, status: :created
        # if event.valid?
        #     render json: event, status: :created
        # else
        #     render json: {errors: event.errors.full_messages}, status: :unprocessable_entity
        # end
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

    def record_invalid(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
