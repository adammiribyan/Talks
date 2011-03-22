# encoding: utf-8

module WeeksHelper
  def week_status_link(week, status)
    if week && status == true    
      "#{link_to "Закрыть", update_status_week_path(week, "close"), :remote => true} неделю.".html_safe
    else
      "#{link_to "Открыть", update_status_week_path(week, "open"), :remote => true} неделю.".html_safe
    end
  end
  
end
