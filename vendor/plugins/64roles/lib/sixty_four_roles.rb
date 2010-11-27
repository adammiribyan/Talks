module SixtyFourRoles
  module ClassMethods
    def has_roles(*args)
      include SixtyFourRoles::InstanceMethods
      
      cattr_accessor :roles
      self.roles = args.map{|r| r.to_s}
      
      self.roles.each do |role|
        define_method "#{role}?" do
          is?(role)
        end
        
        define_method "#{role}=" do |value|
          value ? add_role(role) : remove_role(role)
        end
        
        scope "#{role.pluralize}", :conditions => ["role & (1 << ?) != 0", self.roles.index(role.to_s)]
      end
    end
  end
  
  module InstanceMethods
    def is?(role_name)
      r = self.class.roles.index(role_name.to_s)
      self.role & (1 << r) != 0 if r
    end
    
    def add_role(role_name)
      r = self.class.roles.index(role_name.to_s)
      self.role |= (1 << r) if r
    end
    
    def remove_role(role_name)
      r = self.class.roles.index(role_name.to_s)
      self.role &= ~(1 << r) if r
    end
    
    def accessible_roles
      self.class.roles.select {|r| is?(r) }
    end
    
    def accessible_roles= (list)
      list = list.select{|role| role.present? and self.class.roles.include?(role) }
      self.role = 0
      list.each do |r|
        self.send("#{r}=", true)
      end
    end
  end
end
