class User < ApplicationRecord

    validates :first_name, :last_name, :password, :password_confirmation, presence: true
    validates :email, presence: true, uniqueness: true

    has_secure_password

    has_many :events

end
