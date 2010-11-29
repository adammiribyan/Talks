class User < ActiveRecord::Base
  include Clearance::User
  
  ROLES = %w[admin author]
  
  has_many :posts
  has_contacts :all
  
  has_attached_file :picture, 
                    :styles => { :big     => "88x88#",
                                 :normal  => "50x50#",
                                 :small   => "25x25#" },
                    :url => "/assets/:class-:attachment/:id/:basename-:style.:extension",
                    :path => ":rails_root/public/assets/:class-:attachment/:id/:basename-:style.:extension"
  
  attr_accessible :username, :email, :password, :picture, :fullname, :firstname, :lastname, :city, :about, :birthday, :gender, :homepage, :facebook, :flickr, :formspring, :icq, :lastfm, :livejournal, :skype, :tumblr, :twitter, :vkontakte, :youtube, :role

  
  validates :username, :presence => true, :uniqueness => true
  validates :email, :presence => true, :uniqueness => true, :format => { :with => /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i }
  validates :password, :presence => true, :on => :create
  
  def to_param
    username
  end
  
  def self.authenticate(email, password)
    user = find(:first, :conditions => ['username = ? OR email = ?', email.to_s.downcase, email.to_s.downcase])
    user && user.authenticated?(password) ? user : nil
  end
  
  def fullname
    [firstname, lastname].join(' ')
  end
  
  def fullname=(name)
    split = name.split(' ', 2)
    self.firstname = split.first
    self.lastname = split.last
  end
end
