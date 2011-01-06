class ApplicantsController < ApplicationController
  
  load_and_authorize_resource :applicant
  
  # GET /applicants
  # GET /applicants.xml
  def index
    respond_with(@applicants)
  end

  # GET /applicants/1
  # GET /applicants/1.xml
  def show
    respond_with(@applicant)
  end

  # GET /applicants/new
  # GET /applicants/new.xml
  def new
    respond_with(@applicant)
  end

  # GET /applicants/1/edit
  def edit
    
  end

  # POST /applicants
  # POST /applicants.xml
  def create
    @applicant = Applicant.create(params[:applicant])
  end

  # PUT /applicants/1
  # PUT /applicants/1.xml
  def update
    @applicant.update_attributes(params[:applicant])
    respond_with(@applicant)
  end

  # DELETE /applicants/1
  # DELETE /applicants/1.xml
  def destroy
    @applicant.destroy
    redirect_to(applicants_url)
  end
end
