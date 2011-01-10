module Facebook
  CONFIG = {
    :app_id => "182413145116336",
    :api_key => "caea9a9ce6ac6df7f73973177ff26da1",
    :app_secret => "b0ff348ccc0853617ec6b333895fb59d"
  }
  
  def self.session
    Facebooker::Session.new(CONFIG[:api_key], CONFIG[:app_secret])
  end
end