class Post < ActiveRecord::Base
  
  belongs_to :user
  belongs_to :week
  has_many :votes
  has_many :users, :through => :votes  
  
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
 
  def self.songs
    select(:song_code)
  end
  
  def self.where_user_is(user)
    where(:user_id => user.id)
  end
  
  def trigger_visibility!
    if self.is_hidden.present?
      value = !self.is_hidden
    else
      value = true
    end
    
    self.update_attribute(:is_hidden, value)
  end
  
  def is_hidden?
    self.is_hidden    
  end
end