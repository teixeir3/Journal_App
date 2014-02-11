JournalApp::Application.routes.draw do
  resources :posts, only: [:index, :create, :destroy, :update]
  root to: "posts#index"
end
