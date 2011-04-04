var AdminPane = {
  
  initialize: function() {
    if ($(".admin-pane-wrap").length > 0) {
      this.adminPaneWrap = $(".admin-pane-wrap");
      this.adminPaneSwitcher = $(".admin-pane-switcher");
      
      this.adminPaneWrap.fadeTo(0, 0.9);
      this.adminPaneWrap.css("height", document.body.clientHeight + "px");
      this.adminPaneWrap.hide();
      this.adminPaneWrap.click(function(e) { AdminPane.toggle(e); });
      this.adminPaneSwitcher.click(function(e) { AdminPane.toggle(e); });
      this.off = true;
    }
  },
  
  toggle: function(e) {
    if (this.off) {
      this.adminPaneWrap.slideDown();
      this.off = false;
    }
    else {
      this.adminPaneWrap.slideUp();
      this.off = true;
    }
  }
};

$(document).ready(function() {	
  
  AdminPane.initialize();
  
	$('.password-trigger').click(function() {
	    // get current input
	    var jCurrentInput = $(this).siblings('input.password').eq(0)
	    
	    $('input.password').hide();
	    
	    // change class and create new input
	    if ($(this).hasClass('show-pass')) {
	        // in case password is now visible -- make it invisible
	        $(this).removeClass('show-pass').addClass('hide-pass');
	        var jNewInput = $('<input type="password">');
	    } else {
	        // in case password is invisible -- make it readable
	        $(this).removeClass('hide-pass').addClass('show-pass');
	        var jNewInput = $('<input type="text">');
	    }
	
	    // insert new input and copy value
	    jNewInput.insertBefore(jCurrentInput).val(jCurrentInput.val());
	
	    // copy attributes
	    aAttrs = ['name', 'id', 'class', 'tabindex', 'value'];
	    for (var i = 0; i < aAttrs.length; i++) {
	        var sName = aAttrs[i].nodeName;
	        if (jCurrentInput.attr(aAttrs[i])) jNewInput.attr(aAttrs[i], jCurrentInput.attr(aAttrs[i]));
	    }
	
	    // remove previous input
	    jCurrentInput.remove();
	    
	    $('input.password').show();
	});
	
	$(".rating-actions > .add").click(function() {
		alert("add!");
	})	
});