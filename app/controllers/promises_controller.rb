class PromisesController < ApplicationController
  before_action :set_promise, only: [:show, :edit, :update, :destroy]


  def index
    @promises = [some_long_synchronous_request, another_long_synchronous_request, a_third_synchronous_request]
  end

  def one
    render json: some_long_synchronous_request
  end

  def two
    render json: another_long_synchronous_request
  end

  def three
    render json: a_third_synchronous_request
  end

  def que1
    render json: first_que_request
  end

  def que2
    render json: second_que_request
  end

  def que3
    render json: third_que_request
  end

  def defer
    render json: defer_your_request
  end

end
