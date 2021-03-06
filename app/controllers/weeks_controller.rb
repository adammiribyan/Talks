# encoding: utf-8

class WeeksController < ApplicationController
  before_filter :show_picture_preview, :only => [:edit, :update]
  load_and_authorize_resource :week, :find_by => :slug, :except => :posts
  
  def index
    @weeks = Week.find(:all, :order => "created_at DESC")
  end
  
  def posts
    @week = Week.find_by_slug(params[:id]) or raise ActiveRecord::RecordNotFound    
    @posts = @week.posts.all :order => 'created_at desc'
    
    respond_with(@posts) do |format|
      format.rss { render :layout => false }
    end
  end
  
  def update_status
    @week = Week.find_by_slug(params[:id]) or raise ActiveRecord::RecordNotFound
    
    case params[:value]
    when "open"
      @week.update_attribute(:is_active, true)
    when "close"
      @week.update_attribute(:is_active, false)
    else
      redirect_to @week, :notice => t("weeks.status_update_fail")
    end
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
    authorize! :assign_moderators
    
    @week = Week.find_by_slug(params[:id]) or raise ActiveRecord::RecordNotFound
    
    if @week.update_attributes(params[:week])
      redirect_to @week, :notice => t("weeks.update_succeed")
    else
      render :action => "edit"
    end
  end

  def destroy
    @week = Week.find_by_slug(params[:id]) or raise ActiveRecord::RecordNotFound
    redirect_to weeks_url if @week.destroy
  end
  
  private
    
    def show_picture_preview
      @show_picture_preview = true
    end
end
