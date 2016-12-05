Rails.application.routes.draw do

  resources :comments do
    resources :votes
  end

  root 'site#index'

  resources :site

  get 'download_pdf', to: "site#download_pdf"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
