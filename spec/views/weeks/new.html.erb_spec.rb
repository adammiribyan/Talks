require 'spec_helper'

describe "weeks/new.html.erb" do
  before(:each) do
    assign(:week, stub_model(Week,
      :name => "MyString",
      :slug => "MyString",
      :description => "MyText"
    ).as_new_record)
  end

  it "renders new week form" do
    render

    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "form", :action => weeks_path, :method => "post" do
      assert_select "input#week_name", :name => "week[name]"
      assert_select "input#week_slug", :name => "week[slug]"
      assert_select "textarea#week_description", :name => "week[description]"
    end
  end
end
