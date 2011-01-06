class ApplicantsController < ApplicationController
  
  load_and_authorize_resource :applicant
  
  def index
    respond_with(@applicants)
  end

  def create
    @applicant = Applicant.create(params[:applicant])
  end

  def destroy
    @applicant.destroy
    redirect_to(applicants_url)
  end
end
