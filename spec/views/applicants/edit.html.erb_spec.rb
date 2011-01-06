require 'spec_helper'

describe "applicants/edit.html.erb" do
  before(:each) do
    @applicant = assign(:applicant, stub_model(Applicant,
      :new_record? => false,
      :email => "MyString"
    ))
  end

  it "renders the edit applicant form" do
    render

    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "form", :action => applicant_path(@applicant), :method => "post" do
      assert_select "input#applicant_email", :name => "applicant[email]"
    end
  end
end
