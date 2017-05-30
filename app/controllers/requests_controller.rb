class RequestsController < ApplicationController
  def create
    @request = Request.new(request_params)
    if @request.save
      render json: @request.created_at
    else
      render json: "POST FAILURE"
    end
  end

  def index
    render json: Request.all
  end

  private

  def request_params
    params.require(:request).permit(:content)
  end
end
