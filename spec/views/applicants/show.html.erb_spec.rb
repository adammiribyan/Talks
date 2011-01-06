require 'spec_helper'

describe "applicants/show.html.erb" do
  before(:each) do
    @applicant = assign(:applicant, stub_model(Applicant,
      :email => "Email"
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    rendered.should match(/Email/)
  end
end
