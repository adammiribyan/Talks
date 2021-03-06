class Week < ActiveRecord::Base
  serialize :moderators, Array
  
  def to_param
    slug || id.to_s
  end
  
  def moderators
    read_attribute(:moderators).map {|user_id| User.find(user_id) } || write_attribute(:moderators, [])
  end
  
  def moderators_list
    read_attribute(:moderators)
  end
  
  scope :active, :conditions => { :is_active => true }
  
  has_many :posts
  has_attached_file :picture, :styles => { :thumb   => "70x70#",
                                           :small   => "50x50#" },
                  :url => "/assets/:class-:attachment/:id/:basename-:style.:extension",
                  :path => ":rails_root/public/assets/:class-:attachment/:id/:basename-:style.:extension"
  
  validates :name, :presence => true, :uniqueness => true, :length => { :maximum => 100 }
  validates :slug, :presence => true, :uniqueness => true
  validates :description, :presence => true, :length => { :maximum => 140 }
  validates_attachment_presence :picture
  
end