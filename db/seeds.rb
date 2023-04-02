# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# Users

demi = User.create!(first_name: 'Demi', last_name: 'Haynes', email: 'demijeffrey@gmail.com', password_digest: BCrypt::Password.create('demi'))

# Events

birthday =  demi.events.create!(name: 'Birthday Party', date: Date.today, time: Time.now, location: '123 Fake St. Not Real, CO 12345', description: 'Join me for my birthday party!', photo_url: 'https://scontent-den4-1.xx.fbcdn.net/v/t39.30808-6/277220881_2455814837882235_5916448369125656834_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aJFvO4m-L4EAX-dEuGN&_nc_ht=scontent-den4-1.xx&oh=00_AfByGfpM5Ad5aAKEnJNBlT4pON54L2waTsdX2c7BXuJCAw&oe=642E5798')

# Guests

guest = Guest.create!(first_name: 'Jeffrey', last_name: 'Haynes', email: 'jeffreydemaris@gmail.com', family: true)

# Invitations

birthday.invitations.create!(guest: guest, rsvp_status: 'pending')