class Week < ActiveRecord::Base
  def to_param
    slug || id.to_s
  end
  
end
