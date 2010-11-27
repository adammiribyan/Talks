class EffectiveScaffoldAdminGenerator < Rails::Generators::NamedBase
  argument :attributes, :type => :array, :default => [], :banner => "field:type field:type"
  source_paths << File.join(File.dirname(__FILE__), "templates")
  
  include Rails::Generators::Migration
  
  def install
    @single_name = file_name.underscore
    @plural_name = @single_name.tableize
    @attributes = attributes
    @model_name = @single_name.classify
    @plural_model_name = @model_name.pluralize
    @migration_name = "Create#{@model_name.pluralize}"
    
    template 'admin_controller.rb', File.join('app/controllers/admin', "#{@plural_name}_controller.rb")
    template 'short_controller.rb', File.join('app/controllers', "#{@plural_name}_controller.rb")
    template 'model.rb', File.join('app/models', "#{@single_name}.rb")
    template 'helper.rb', File.join('app/helpers', "#{@plural_name}_helper.rb")
    template 'migration.rb', "db/migrate/#{Time.now.utc.strftime("%Y%m%d%H%M%S")}_create_#{@plural_name}.rb"
    template 'view_admin_edit.haml', File.join('app/views/admin', @plural_name, "edit.haml")
    template 'view_admin_index.haml', File.join('app/views/admin', @plural_name, "index.haml")
    template 'view_blank.haml', File.join('app/views', @plural_name, "index.haml")
    template 'view_blank.haml', File.join('app/views', @plural_name, "show.haml")
    route "resources :#{@plural_name}, :only => [:index, :show]"
  end
end
