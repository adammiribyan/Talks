require 'spec_helper'

describe "weeks/edit.html.erb" do
  before(:each) do
    @week = assign(:week, stub_model(Week,
      :new_record? => false,
      :name => "MyString",
      :slug => "MyString",
      :description => "MyText"
    ))
  end

  it "renders the edit week form" do
    render

    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "form", :action => week_path(@week), :method => "post" do
      assert_select "input#week_name", :name => "week[name]"
      assert_select "input#week_slug", :name => "week[slug]"
      assert_select "textarea#week_description", :name => "week[description]"
    end
  end
end
