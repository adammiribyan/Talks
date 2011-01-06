require 'spec_helper'

describe "applicants/index.html.erb" do
  before(:each) do
    assign(:applicants, [
      stub_model(Applicant,
        :email => "Email"
      ),
      stub_model(Applicant,
        :email => "Email"
      )
    ])
  end

  it "renders a list of applicants" do
    render
    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "tr>td", :text => "Email".to_s, :count => 2
  end
end
