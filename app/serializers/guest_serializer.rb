class GuestSerializer < ActiveModel::Serializer

  attributes :id, :first_name, :last_name, :email, :family, :events, :invitations, :user

end
