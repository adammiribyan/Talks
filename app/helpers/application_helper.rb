# encoding: utf-8

module ApplicationHelper  
  def title(page_title)
    content_for(:title) { page_title }
  end
  
  def new_post_link
    if (params[:controller] == "weeks") && (can? :create, Week)
      link_to_unless_current "Новый параграф", new_user_post_path(current_user, :week => params[:id])
    else
      link_to_unless_current "Новый параграф", new_user_post_path(current_user)
    end
  end
  
  def form_header(title, hint = " ")
    "<h1 class='form'>#{title}</h1> 
    <span class='head-note block-inline'>#{hint}</span> 
    <div class='b-line b-line-thin'></div>".html_safe
  end
  
  def custom_button_to(name, url, action_class, icon = nil)
    if icon
      link_classes = "button block-inline button-icon button-icon-#{icon}"
    else
      link_classes = "button block-inline"
    end    
    
    "<a class='#{link_classes} #{action_class}' href='#{url}'>
        <div class='bg'>
          <i class='l'></i>
          <i class='r'></i>
        </div>
        <i class='icon'></i>
        <span class='button-text'>#{name}</span>
      </a>".html_safe
  end
  
  def submit_button (name, remote = false)
    if remote
      "<a class='button block-inline submit-form' href='#'>
        <div class='bg'>
          <i class='l'></i>
          <i class='r'></i>
        </div>
        <i class='icon'></i>
        <span class='button-text'>#{name}</span>
      </a>
      <input name='commit' style='display: none;' data-remote='true' type='submit' value='#{name}' />".html_safe
    else
      "<a class='button block-inline submit-form' href='#'>
        <div class='bg'>
          <i class='l'></i>
          <i class='r'></i>
        </div>
        <i class='icon'></i>
        <span class='button-text'>#{name}</span>
      </a>
      <input name='commit' style='display: none;' type='submit' value='#{name}' />".html_safe
    end
  end
  
  def social_button(alt, url, img, size = 16)
    "<a href='#{url}'> 
      <img alt='#{alt}' class='normal' height='#{size}' src='/images/#{img}.png' width='#{size}'> 
      <img alt='#{alt}' class='disabled' height='#{size}' src='/images/#{img}_disabled.png' width='#{size}'> 
     </a>".html_safe
  end
  
end
