Rails.application.routes.draw do
  resources :requests, only: [:create, :index]
end
