Rails.application.routes.draw do

  resources :invitations do
    get 'rsvp/:token', to: 'invitations#rsvp', as: 'rsvp_with_token'
    # patch 'update/:token', to: 'invitations#update', as: 'update_with_token'
  end

  resources :guests

  resources :events do
    post 'create_invitation', to: 'invitations#create_invitation'
  end
  patch '/events', to: 'events#update'

  get '/current-user', to: 'users#show'
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  get '/invitations/:token', to: 'invitations#show'
  patch '/invitations', to: 'invitations#update'
  delete '/invitations', to: 'invitations#destroy'

  # get '/events', to: 'events#index'
  # post '/events', to: 'events#create'
  # delete 'events/:id', to: 'events#destroy'

  # get '/guests', to: 'guests#index'
  # post '/guests', to: 'guests#create'

  # get '/:token', to: 'invitations#show'

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }

end
