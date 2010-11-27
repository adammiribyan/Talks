class <%= @plural_model_name %>Controller < ApplicationController

  def index
    @<%= @plural_name %> = <%= @model_name %>.all
  end
  
  def show
    @<%= @single_name %> = <%= @model_name %>.find(params[:id])
  end
  
private

end