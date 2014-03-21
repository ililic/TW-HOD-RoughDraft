HODPromise::Application.routes.draw do
  resources :promises
  
  get 'one', to: 'promises#one'
  get 'two', to: 'promises#two'
  get 'three', to: 'promises#three'
  get 'que1', to: 'promises#que1'
  get 'que2', to: 'promises#que2'
  get 'que3', to: 'promises#que3'
  get 'defer', to: 'promises#defer'
  get 'angular', to: 'promises#angularIndex'

  root 'welcome#index'

end
