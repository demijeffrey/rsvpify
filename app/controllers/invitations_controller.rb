class InvitationsController < ApplicationController

    include Rails.application.routes.url_helpers

    def create_invitation
        @event = Event.find(params[:event_id])
        @guests = Guest.where(id: params[:guest_ids])
        @guests.each do |guest|
            invitation = @event.invitations.create!(guest: guest, token: SecureRandom.hex(16), rsvp_status: "pending")
            InvitationMailer.invitation_email(invitation).deliver_now
          end
    end

    def rsvp
        invitation = Invitation.find_by(token: params[:token])
        render json: invitation
    end
    
    def update
        invitation = Invitation.find_by(token: params[:token])
        invitation.update!(invitation_params)
        render json: invitation
    end

    def destroy
        invite = Invitation.find_by(guest_id: params[:guest_id])
        invite.destroy
    end

    private

    def invitation_params
        params.permit(:event_id, :guest_id, :rsvp_status, :message, :plus_one, :token)
    end

    def generate_token
        self.token = SecureRandom.hex(10)
    end

end
