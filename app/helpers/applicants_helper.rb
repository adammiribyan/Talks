module ApplicantsHelper
  
  def applicants_count(object)
    if object.count > 0
      "(#{object.count})".html_safe
    else
      ""
    end
  end
  
end
