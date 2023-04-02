class Event < ApplicationRecord

  belongs_to :user
  has_many :invitations
  has_many :guests, through: :invitations

end
