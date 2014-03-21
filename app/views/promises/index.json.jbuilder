json.array!(@promises) do |promise|
  json.extract! promise, :id, :name
  json.url promise_url(promise, format: :json)
end
