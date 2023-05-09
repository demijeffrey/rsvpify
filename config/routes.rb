Rails.application.routes.draw do

  resources :invitations do
    get 'rsvp/:token', to: 'invitations#rsvp', as: 'rsvp_with_token'
    # patch 'update/:token', to: 'invitations#update', as: 'update_with_token'
  end

  get '/:token', to: 'invitations#show'
  patch '/invitations', to: 'invitations#update'
  delete '/invitations', to: 'invitations#destroy'

  resources :guests

  resources :events do
    post 'create_invitation', to: 'invitations#create_invitation'
  end

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
