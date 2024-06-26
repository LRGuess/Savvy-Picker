Rails.application.routes.draw do
  resources :classrooms
  resources :students
  root to: 'classrooms#index'  # Set root path as per your preference
end
