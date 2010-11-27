module PostsHelper
  
  def char_counter_for(object, allowed = 100)
    "<script type=\"text/javascript\">
        $(document).ready(function(){
          $(\"##{object.to_s}\").charCount({
            allowed: #{allowed.to_i},
            warning: #{allowed.to_i * 0.2}
          });    
        });
     </script>".html_safe
  end
  
end
