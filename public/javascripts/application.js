// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

Event.observe(document, 'dom:loaded', function() { 
    new AdminPane(); 
}); 

var AdminPane = Class.create({ 
   initialize: function(){ 
        if ($$('.admin-pane-wrap')[0]){ 
            this.adminPaneWrap = $$('.admin-pane-wrap')[0]; 
            this.adminPaneSwitcher = $$('.admin-pane-switcher')[0]; 
     
            this.adminPaneWrap.setOpacity('0.9'); 
            this.adminPaneWrap.setStyle({height :document.body.clientHeight + 'px'}); 
            this.adminPaneWrap.observe('click', this.toggle.bind(this)); 
            this.adminPaneSwitcher.observe('click', this.toggle.bind(this)); 
            this.off = true; 
        } 
    }, 
    toggle: function(e){ 
        if (this.off)        { 
            this.adminPaneWrap.blindDown(); 
            this.off = false; 
        } 
        else 
        { 
            this.adminPaneWrap.dropOut();
			// this.adminPaneWrap.blindUp(); 
            this.off = true; 
        } 
    } 
});


$(document).ready(function(){	
  $(document).keydown(function(event) {
    if (window.event) event = window.event;
    switch (event.keyCode ? event.keyCode : event.which ? event.which : null)
    {
  		case 0x25:
  			link = $('#PrevLink');
  			break;
  		case 0x27:
  			link = $('#NextLink');
  			break;
      }
  	if (link && link.href) document.location = link.href;	
  });
  
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
	})	
});
