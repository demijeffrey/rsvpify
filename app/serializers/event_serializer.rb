class EventSerializer < ActiveModel::Serializer

  attributes :id, :name, :date, :time, :location, :description, :photo_url, :guests, :invitations
  # has_one :user_id

  # belongs_to :user
  has_many :invitations
  has_many :guests, through: :invitations

end
