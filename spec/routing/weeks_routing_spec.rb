require "spec_helper"

describe WeeksController do
  describe "routing" do

    it "recognizes and generates #index" do
      { :get => "/weeks" }.should route_to(:controller => "weeks", :action => "index")
    end

    it "recognizes and generates #new" do
      { :get => "/weeks/new" }.should route_to(:controller => "weeks", :action => "new")
    end

    it "recognizes and generates #show" do
      { :get => "/weeks/1" }.should route_to(:controller => "weeks", :action => "show", :id => "1")
    end

    it "recognizes and generates #edit" do
      { :get => "/weeks/1/edit" }.should route_to(:controller => "weeks", :action => "edit", :id => "1")
    end

    it "recognizes and generates #create" do
      { :post => "/weeks" }.should route_to(:controller => "weeks", :action => "create")
    end

    it "recognizes and generates #update" do
      { :put => "/weeks/1" }.should route_to(:controller => "weeks", :action => "update", :id => "1")
    end

    it "recognizes and generates #destroy" do
      { :delete => "/weeks/1" }.should route_to(:controller => "weeks", :action => "destroy", :id => "1")
    end

  end
end
