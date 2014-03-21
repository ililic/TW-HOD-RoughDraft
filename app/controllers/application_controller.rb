class ApplicationController < ActionController::Base

  def some_long_synchronous_request
    sleep(1.0)
    Promise.new(name: "It will be 13 degrees celius today.")
  end

  def another_long_synchronous_request
    sleep(15.0)
    Promise.new(name: "JavaScript is your friend.")
  end

  def a_third_synchronous_request
    sleep(13.0)
    Promise.new(name: "At the end of this workshop you will be equipped with new tools in your Development Toolbelt.™")
  end

end
