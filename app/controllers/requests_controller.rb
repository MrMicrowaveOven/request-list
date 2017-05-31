class RequestsController < ApplicationController
  def create
    @request = Request.new(request_params)
    if @request.save
      render json: @request.created_at
    else
      render json: {Post: "failure"}
    end
  end

  def index
    render json: Request.all
  end

  def destroy
    Request.all.each do |request|
      request.destroy
    end
    render json: {allRequests: "deleted"}
  end

  private

  def request_params
    params.require(:request).permit(:content)
  end
end
