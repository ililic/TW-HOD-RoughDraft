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

end
