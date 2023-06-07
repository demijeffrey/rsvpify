Rails.application.routes.draw do

  get '/current-user', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  resources :invitations do
    get '/rsvp/:token', to: 'invitations#rsvp', as: 'rsvp_with_token'
  end

  resources :guests

  resources :events do
    post '/create_invitation', to: 'invitations#create_invitation'
  end
  patch '/events', to: 'events#update'

  patch '/invitations', to: 'invitations#update'
  delete '/invitations', to: 'invitations#destroy'

  # get '*path',
  #     to: 'fallback#index',
  #     constraints: ->(req) { !req.xhr? && req.format.html? }

end
