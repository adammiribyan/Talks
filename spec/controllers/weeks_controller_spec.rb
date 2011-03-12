require 'spec_helper'

describe WeeksController do

  def mock_week(stubs={})
    (@mock_week ||= mock_model(Week).as_null_object).tap do |week|
      week.stub(stubs) unless stubs.empty?
    end
  end

  describe "GET index" do
    it "assigns all weeks as @weeks" do
      Week.stub(:all) { [mock_week] }
      get :index
      assigns(:weeks).should eq([mock_week])
    end
  end

  describe "GET show" do
    it "assigns the requested week as @week" do
      Week.stub(:find).with("37") { mock_week }
      get :show, :id => "37"
      assigns(:week).should be(mock_week)
    end
  end

  describe "GET new" do
    it "assigns a new week as @week" do
      Week.stub(:new) { mock_week }
      get :new
      assigns(:week).should be(mock_week)
    end
  end

  describe "GET edit" do
    it "assigns the requested week as @week" do
      Week.stub(:find).with("37") { mock_week }
      get :edit, :id => "37"
      assigns(:week).should be(mock_week)
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "assigns a newly created week as @week" do
        Week.stub(:new).with({'these' => 'params'}) { mock_week(:save => true) }
        post :create, :week => {'these' => 'params'}
        assigns(:week).should be(mock_week)
      end

      it "redirects to the created week" do
        Week.stub(:new) { mock_week(:save => true) }
        post :create, :week => {}
        response.should redirect_to(week_url(mock_week))
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved week as @week" do
        Week.stub(:new).with({'these' => 'params'}) { mock_week(:save => false) }
        post :create, :week => {'these' => 'params'}
        assigns(:week).should be(mock_week)
      end

      it "re-renders the 'new' template" do
        Week.stub(:new) { mock_week(:save => false) }
        post :create, :week => {}
        response.should render_template("new")
      end
    end

  end

  describe "PUT update" do

    describe "with valid params" do
      it "updates the requested week" do
        Week.should_receive(:find).with("37") { mock_week }
        mock_week.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :week => {'these' => 'params'}
      end

      it "assigns the requested week as @week" do
        Week.stub(:find) { mock_week(:update_attributes => true) }
        put :update, :id => "1"
        assigns(:week).should be(mock_week)
      end

      it "redirects to the week" do
        Week.stub(:find) { mock_week(:update_attributes => true) }
        put :update, :id => "1"
        response.should redirect_to(week_url(mock_week))
      end
    end

    describe "with invalid params" do
      it "assigns the week as @week" do
        Week.stub(:find) { mock_week(:update_attributes => false) }
        put :update, :id => "1"
        assigns(:week).should be(mock_week)
      end

      it "re-renders the 'edit' template" do
        Week.stub(:find) { mock_week(:update_attributes => false) }
        put :update, :id => "1"
        response.should render_template("edit")
      end
    end

  end

  describe "DELETE destroy" do
    it "destroys the requested week" do
      Week.should_receive(:find).with("37") { mock_week }
      mock_week.should_receive(:destroy)
      delete :destroy, :id => "37"
    end

    it "redirects to the weeks list" do
      Week.stub(:find) { mock_week }
      delete :destroy, :id => "1"
      response.should redirect_to(weeks_url)
    end
  end

end
