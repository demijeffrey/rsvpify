class InvitationsController < ApplicationController

    # before_create :generate_token
    include Rails.application.routes.url_helpers

    # def create
    #     invite = Invitation.create!(invitation_params)
    #     render json: invite
    # end

    def create_invitation
        @event = Event.find(params[:event_id])
        @guests = Guest.where(id: params[:guest_ids])
        @guests.each do |guest|
            invitation = @event.invitations.create!(guest: guest, token: SecureRandom.hex(16), rsvp_status: "pending")
            # byebug
            InvitationMailer.invitation_email(invitation).deliver_later
          end
    end

    def rsvp
        @invitation = Invitation.find_by(token: params[:token])
        render json: @invitation
    end
    
    def update
        invitation = Invitation.find_by(token: params[:token])
        invitation.update!(invitation_params)
        # byebug
        render json: invitation
    end

    def show
        invite = Invitation.find_by(token: params[:token])
        render json: invite
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
