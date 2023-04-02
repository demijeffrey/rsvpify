class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :time, :location, :description, :photo_url
  has_one :user_id
end
