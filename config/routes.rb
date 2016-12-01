Rails.application.routes.draw do

  resources :comments do
    resources :votes
  end

  root 'site#index'

  resources :site

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
