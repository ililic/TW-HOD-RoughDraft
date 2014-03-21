class ApplicationController < ActionController::Base

  def some_long_synchronous_request
    sleep(1.0)
    Promise.new(name: "It will be 13 degrees celcius today.")
  end

  def another_long_synchronous_request
    sleep(10.0)
    Promise.new(name: "JavaScript is your friend.")
  end

  def a_third_synchronous_request
    sleep(5.0)
    Promise.new(name: "At the end of this workshop you will be equipped with new tools in your Development Toolbelt.™")
  end

  def first_que_request
    sleep(2.0)
    return {id:2, starch:"potatoes", fruit_id:1 }
  end

  def second_que_request
    sleep(4.0)
    return [{ fruit_id:1, fruit_name:"apple"}, { fruit_id:2, fruit_name:"pear"}]
  end

  def third_que_request
    sleep(1.0)
    return {some_field:"Hooray", another_field:"for", more_field:"$q"}
  end

  def defer_your_request
    sleep(3.0)
    return {message:"Your function is wrapped in a nice soft promise"}
  end
end
