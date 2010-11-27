class Admin::<%= @plural_model_name %>Controller < ApplicationController
  before_filter :find_<%= @single_name %>, :except => [:index, :new, :create]

  def index
    @<%= @plural_name %> = <%= @model_name %>.all
  end

  def new
    @<%= @single_name %> = <%= @model_name %>.new
    render :action => :edit
  end

  def create
    @<%= @single_name %> = <%= @model_name %>.new(params[:<%= @single_name %>])

    if @<%= @single_name %>.save
      redirect_to admin_<%= @plural_name %>_url
    else
      render :action => "edit"
    end
  end

  def update
    if @<%= @single_name %>.update_attributes(params[:<%= @single_name %>])
      redirect_to admin_<%= @plural_name %>_url
    else
      render :action => "edit"
    end
  end

  def destroy
    @<%= @single_name %>.destroy
    redirect_to admin_<%= @plural_name %>_url
  end

private

  def find_<%= @single_name %>
    @<%= @single_name %> = <%= @model_name %>.find(params[:id])
  end
end