class Event < ApplicationRecord

  validates :name, :date, :time, :description, :location, presence: true

  belongs_to :user
  has_many :invitations, dependent: :destroy
  has_many :guests, through: :invitations

end
