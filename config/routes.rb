Rails.application.routes.draw do
  get "/requests" => "requests#index"
  post "/requests" => "requests#create"
  delete "/requests" => "requests#destroy"
  # resources :requests, only: [:create, :index, :destroy]
end
