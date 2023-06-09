class UserSerializer < ActiveModel::Serializer

  attributes :id, :first_name, :last_name, :email, :password_digest

  has_many :events
  has_many :guests
  
end
