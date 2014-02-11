JournalApp::Application.routes.draw do
  resources :posts, only: :index

end
