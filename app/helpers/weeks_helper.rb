# encoding: utf-8

module WeeksHelper
  def week_status_change_link(week, status)
    if week && status == true    
      "#{link_to "Закрыть", update_status_week_path(week, "close"), :remote => true} неделю.".html_safe
    else
      "#{link_to "Открыть", update_status_week_path(week, "open"), :remote => true} неделю.".html_safe
    end
  end
  
  def week_status_text(week)
    if !week.is_active?
      "была закрыта #{I18n.l week.updated_at.to_date}"
    else 
      "открыта уже #{distance_of_time_in_words(Time.now - week.created_at)}"
    end
  end
  
end
