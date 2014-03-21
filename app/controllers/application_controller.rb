class ApplicationController < ActionController::Base

  def some_long_synchronous_request
    sleep(10.0)
    Promise.new(name: "Promises Rock!")
  end

  def another_long_synchronous_request
    sleep(5.0)
    Promise.new(name: "Promises Rule!!")
  end

  def a_third_synchronous_request
    sleep(2.0)
    Promise.new(name: "Promises Wooo!!!!")
  end

end
