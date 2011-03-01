class Post < ActiveRecord::Base
  
  belongs_to :user
  has_many :votes
  has_many :users, :through => :votes
  
  scope :published, :conditions => { :is_published => true }
  
  define_index do
    indexes :conversation
    indexes :title    
    indexes user.username
    indexes [user.firstname, user.lastname], :as => :author_name
  end
  
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
  validates :picture_author_name, :presence => true
  validates :song_code, :presence => true 
 
end