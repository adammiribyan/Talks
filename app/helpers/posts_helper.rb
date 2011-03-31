#coding: utf-8

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
  
  def search_results_count(count, type = 1)
    if type == 1 
      declinated_name_for_found = Russian.p(count.to_i, "нашелся", "нашлись", "нашлось")
      declinated_name_for_result = Russian.p(count.to_i, "результат", "результата", "результатов")
    
      "Всего #{declinated_name_for_found} #{count.to_s} #{declinated_name_for_result}"
    else
      declinated_name_for_found = Russian.p(count.to_i, "найден", "найдено", "найдено")
      declinated_name_for_result = Russian.p(count.to_i, "результат", "результата", "результатов")
    
      "#{declinated_name_for_found} #{count.to_s} #{declinated_name_for_result}"
    end
  end 
  
  def get_votes_count(post)
    votes_plus = post.votes.where("operator = ?", "+").count
    votes_minus = post.votes.where("operator = ?", "-").count
    votes = (votes_plus.to_i - votes_minus.to_i)
    
    return votes
  end
  
  def next_post(post)
    next_post = current_user_posts[current_user_posts.index(post) + 1]
    
    if post != next_post
      next_post
    else
      ""
    end
  end
  
  def previous_post(post)
    previous_post = current_user_posts[current_user_posts.index(post) - 1]
    
    if post != previous_post
      previous_post    
    else
      ""
    end
  end
  
  def current_user_posts
    Post.find_by_id(params[:id]).user.posts.published if params[:id].present?
  end
  
end
