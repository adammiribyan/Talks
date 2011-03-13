class Week < ActiveRecord::Base
  def to_param
    slug || id.to_s
  end 
  
  has_attached_file :picture, :styles => { :thumb   => "70x70#" },
                  :url => "/assets/:class-:attachment/:id/:basename-:style.:extension",
                  :path => ":rails_root/public/assets/:class-:attachment/:id/:basename-:style.:extension"
  
  validates :name, :presence => true, :uniqueness => true, :length => { :maximum => 100 }
  validates :slug, :presence => true, :uniqueness => true
  validates :description, :presence => true, :length => { :maximum => 140 }
  validates_attachment_presence :picture
  
end