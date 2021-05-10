Rails.application.routes.draw do
	resources :sight_words, only: [:index, :show]

	resources :users, only: [:index, :create] do
  	  resources :completed_words, only: [:index, :create, :destroy]
	end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
