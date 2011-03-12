require 'spec_helper'

describe "weeks/index.html.erb" do
  before(:each) do
    assign(:weeks, [
      stub_model(Week,
        :name => "Name",
        :slug => "Slug",
        :description => "MyText"
      ),
      stub_model(Week,
        :name => "Name",
        :slug => "Slug",
        :description => "MyText"
      )
    ])
  end

  it "renders a list of weeks" do
    render
    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Name".to_s, :count => 2
    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Slug".to_s, :count => 2
    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
  end
end
