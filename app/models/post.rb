class Post < ActiveRecord::Base

  belongs_to :user
  has_many :votes
  has_many :users, :through => :votes
  
  scope :featured, :conditions => { :featured => true } # TODO: would be better to use is_featured
  
  has_attached_file :picture,
                    :styles => { :normal  => "550x370#",
                                 :featured => "330x222#",
                                 :preview => "150x101#",
                                 :small   => "137x93#" },
                    :url => "/assets/:class-:attachment/:id/:basename-:style.:extension",
                    :path => ":rails_root/public/assets/:class-:attachment/:id/:basename-:style.:extension"
  
  validates :title, :presence => true, :length => { :maximum => 100 }         
  validates :conversation, :presence => true
  validates :note, :length => { :maximum => 200 }
  validates :picture_author_name, :presence => true
  validates :song_title, :song_link, :presence => true 
 
end