class InvitationMailer < ApplicationMailer

    # default from: 'demijeffrey@gmail.com'

    # def invitation_email(guest, event)
    #     @guest = guest
    #     @event = event
    #     @token = guest.token

    #     mail(to: guest.email, subject: "Invitation to #{@event.name}")
    # end

    def invitation_email(invitation)
        @invitation = invitation
        @guest = invitation.guest
        @event = invitation.event
        @token = invitation.token

        mail(to: @guest.email, subject: "Invitation to #{invitation.event.name}")
      end

end
