class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :rsvp_status, :plus_one, :message, :token, :guest, :event
  has_one :event_id
  has_one :guest_id
end
