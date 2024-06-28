Rails.application.routes.draw do
  devise_for :users
  resources :students
<<<<<<< HEAD
  resources :classrooms do
    get "add_student", to: "classrooms#add_student"
  end
  devise_for :users
  root 'classrooms#index'

=======
  resources :classrooms
>>>>>>> parent of fc71c9fa (Fixed everything, added students related to classrooms and made all the pages go back to classrooms)
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
