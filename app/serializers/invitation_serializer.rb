class InvitationSerializer < ActiveModel::Serializer
  attributes :id, :rsvp_status, :plus_one, :message, :token
  has_one :event_id
  has_one :guest_id
end
