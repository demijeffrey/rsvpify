class Guest < ApplicationRecord

    validates :first_name, :last_name, presence: true
    validates :email, presence: true, uniqueness: true

    has_many :invitations
    has_many :events, through: :invitations
    belongs_to :user

end
