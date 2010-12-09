require 'spec_helper'

describe "invites/new.html.erb" do
  before(:each) do
    assign(:invite, stub_model(Invite,
      :email => "MyString",
      :body => "MyText",
      :token => "MyString",
      :sender_id => 1
    ).as_new_record)
  end

  it "renders new invite form" do
    render

    # Run the generator again with the --webrat-matchers flag if you want to use webrat matchers
    assert_select "form", :action => invites_path, :method => "post" do
      assert_select "input#invite_email", :name => "invite[email]"
      assert_select "textarea#invite_body", :name => "invite[body]"
      assert_select "input#invite_token", :name => "invite[token]"
      assert_select "input#invite_sender_id", :name => "invite[sender_id]"
    end
  end
end
