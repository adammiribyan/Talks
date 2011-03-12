class WeeksController < ApplicationController
  def index
    redirect_to root_url
  end

  def show
    @week = Week.find_by_slug(params[:id]) or raise ActiveRecord::RecordNotFound
  end

  def new
    @week = Week.new
  end

  def edit
    @week = Week.find_by_slug(params[:id]) or raise ActiveRecord::RecordNotFound
  end

  def create
    @week = Week.new(params[:week])
    
    if @week.save
      redirect_to @week, :notice => t("weeks.create_succeed")
    else
      render :action => "new"
    end    
  end

  def update
    @week = Week.find(params[:id])
    
    if @week.update_attributes(params[:week])
      recirect_to @week, :notice => t("weeks.update_succeed")
    else
      render :action => "edit"
    end
  end

  def destroy
    @week = Week.find_by_slug(params[:id]) or raise ActiveRecord::RecordNotFound
    redirect_to weeks_url if @week.destroy
  end
  
end
