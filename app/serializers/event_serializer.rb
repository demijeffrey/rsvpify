class EventSerializer < ActiveModel::Serializer

  attributes :id, :name, :date, :time, :location, :description, :photo_url, :user, :guests, :invitations
  
  has_many :invitations
  has_many :guests, through: :invitations

end
