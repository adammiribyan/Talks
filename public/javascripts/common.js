$(document).ready(function(){
    
/* button visual events
**************************************/
    $('.button').mousedown(function(event){
      if(event.which == 1) {
        $(this).addClass('button-pressed');
      }
    })
    .mouseup(function(){
      $(this).removeClass('button-pressed');
    })
    .hover(function(){
      $(this).addClass('button-hover');
    }, function(){
      $(this).removeClass('button-hover');
    })
    .bind('click', function(){
      if($(this).attr('href') == '#') {
        return false;
      }
    });
 
/* buttons with class .submit-form
 * submits closest parent form 
 * by default  
**************************************/
    $('.submit-form').click(function(){
      $(this).closest('form').submit();
    });

  });
  
(function($){
  $.fn.searchForm = function(){
    return this.each(function(){
      var $this = $(this);
      var label = $this.find('.form-label');
      var input = $this.find('.field input');
      if(input.val() != '') {
        label.hide().animate({opacity: 0});
      }
      label.bind('click', function(){
        label.hide().animate({opacity: 0});
        input.focus();
      });
      input.bind('focus', function(){
        label.hide().animate({opacity: 0});
      });
      input.bind('blur', function(){
        if(input.val() == '') {
          label.show().animate({opacity: 1});
        }
      });
    });
  }
})(jQuery);

$(document).ready(function(){
  $('.form-search').searchForm();
});