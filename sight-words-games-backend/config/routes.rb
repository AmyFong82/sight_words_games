Rails.application.routes.draw do
  resources :completed_words
  resources :sight_words
  resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
