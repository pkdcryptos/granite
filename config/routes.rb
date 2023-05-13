Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  resources :users do
    member do
      get "report"
    end
  end

  resources :guys do
    get "ban", on: :member
  end
  
  

end
