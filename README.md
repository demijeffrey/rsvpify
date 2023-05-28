<!-- # README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->


# RSVPify

This event invitation manager is designed to simplify event planning by managing the events guest list. A logged in user has the ability to create an event, keep a record of all their contacts, and send event invitations to their contacts email. RSVPify will keep track the guest list, rendering the guests names green when confirmed and red if pending, undecided, or not attending, and also any messages left by guests through their confirmation. Inside the email sent out to each guest is a RSVP link which will redirect them to the RSVPify app to an RSVP form for them to complete and submit with their response and an optional message if they choose to leave one.


## Constructed With

This app was designed using:
* React
* Ruby/Rails
* Postgresql
* ActiveRecord
* ActionMailer
* JSX, HTML, CSS
* MaterializeCSS



## Installation and Requirements

* Fork and clone this repo

* Have all gems and dependencies installed

* If you don't already have the Ruby gems installed for the backend, run the following:
```console
$ bundle install
```

* For the frontend dependencies, run the following:
```console
$ npm install --prefix client
```

* Make sure to have Postgresql installed and running as the database. 

    * For WSL:
```console
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib libpq-dev
$ sudo service postgresql start
```

   * For OSX:
```console
$ brew install postgresql
$ brew services start postgresql
```



## Starting The Servers and Opening the App

* To open the app in the browser and start up the frontend server:
```console
$ npm start --prefix client
```
* In a new terminal, start the server for the backend:
```console
$ rails s
```



## License

[MIT](https://choosealicense.com/licenses/mit/)