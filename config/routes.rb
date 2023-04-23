Rails.application.routes.draw do

  resources :invitations
  resources :guests
  # resources :events

  get '/current-user', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/events', to: 'events#index'
  post '/events', to: 'events#create'
  patch '/events', to: 'events#update'

  # get '/guests', to: 'guests#index'
  post '/guests', to: 'guests#create'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
