class Post < ActiveRecord::Base

  belongs_to :user
  has_many :votes
  has_many :users, :through => :votes
  
  has_attached_file :picture,
                    :styles => { :normal  => "550x370#", 
                                 :preview => "275x185#",
                                 :small   => "137x93#" },
                    :url => "/assets/:class-:attachment/:id/:basename-:style.:extension",
                    :path => ":rails_root/public/assets/:class-:attachment/:id/:basename-:style.:extension"
  
  validates :title, :presence => true, :length => { :maximum => 100 }         
  validates :conversation, :presence => true
  validates :note, :length => { :maximum => 200 }
  validates :picture_author_name, :presence => true
  validates :song, :presence => true 
 
end