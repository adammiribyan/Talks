class Week < ActiveRecord::Base
  to_param do
    slug || id.to_s
  end
  
end
