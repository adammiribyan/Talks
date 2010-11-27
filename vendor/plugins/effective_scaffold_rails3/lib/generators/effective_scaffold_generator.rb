class EffectiveScaffoldGenerator < Rails::Generators::NamedBase
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
    
    template 'controller.rb', File.join('app/controllers', "#{@plural_name}_controller.rb")
    template 'model.rb', File.join('app/models', "#{@single_name}.rb")
    template 'helper.rb', File.join('app/helpers', "#{@plural_name}_helper.rb")
    template 'migration.rb', "db/migrate/#{Time.now.utc.strftime("%Y%m%d%H%M%S")}_create_#{@plural_name}.rb"
    template 'helper.rb', File.join('app/helpers', "#{@plural_name}_helper.rb")
    
    template 'view_edit.haml', File.join('app/views', @plural_name, "edit.haml")
    template 'view_index.haml', File.join('app/views', @plural_name, "index.haml")
    template 'view_singular.haml', File.join('app/views', @plural_name, "_#{@single_name}.haml")
    route "resources :#{@plural_name}"
  end
end
