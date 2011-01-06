require 'spec_helper'

describe "applicants/new.html.erb" do
  before(:each) do
    assign(:applicant, stub_model(Applicant,
      :email => "MyString"
    ).as_new_record)
  end

  it "renders new applicant form" do
    render

    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "form", :action => applicants_path, :method => "post" do
      assert_select "input#applicant_email", :name => "applicant[email]"
    end
  end
end
