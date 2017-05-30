class RequestsController < ApplicationController
  def create
    # @request = Request.new(request_params)
    # @request.save

  end
  def index
    render json: {this: "isAwesome1"}
  end

  private

  def request_params
    params.require(:request).permit(:content)
  end
end
