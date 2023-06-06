class InvitationMailer < ApplicationMailer

    def welcome
        @greeting = "Hi"
        mail(to: "demiashmore@yahoo.com", subject: 'Welcome to My Awesome Site')
      end

    def invitation_email(invitation)
        @invitation = invitation
        @guest = invitation.guest
        @event = invitation.event
        @token = invitation.token
        @id = invitation.id

        mail(to: @guest.email, subject: "Invitation to #{invitation.event.name}")
      end

end
