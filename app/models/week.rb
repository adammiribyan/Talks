class Week < ActiveRecord::Base
  def to_param
    slug || id.to_s
  end
  
  validates :name, :presence => true, :uniqueness => true, :length => { :maximum => 100 }
  validates :slug, :presence => true, :uniqueness => true
  validates :description, :presence => true, :length => { :maximum => 140 }
  
end
