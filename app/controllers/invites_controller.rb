# coding: utf-8
class InvitesController < ApplicationController

  def new
    @invite = Invite.new
  end

  def create
    @invite = Invite.new(params[:invite])
    @invite.sender = current_user
    
    if @invite.save
      flash[:notice] = "Приглашение успешно отправлено."
      redirect_to root_url
    else
      render :action => 'new'
    end
  end
  
end