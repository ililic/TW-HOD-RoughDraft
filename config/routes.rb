HODPromise::Application.routes.draw do
  resources :promises
  
  get 'one', to: 'promises#one'
  get 'two', to: 'promises#two'
  get 'three', to: 'promises#three'

  root 'welcome#index'

end
