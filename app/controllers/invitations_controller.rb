class InvitationsController < ApplicationController

    before_create :generate_token

    def create
    invite = Invitation.create(invitation_params)
    render json:
    end

    def index
    end

    def update
    end

    def destroy
    end

    private

    def invitation_params
        params.permit(:event_id, :guest_id, :rsvp_status, :message, :plus_one, :token)
    end

    def generate_token
        self.token = SecureRandom.hex(10)
    end

end
