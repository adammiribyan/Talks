$(document).ready(function(){	
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