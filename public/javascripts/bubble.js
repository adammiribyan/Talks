
(function($) {
  
  var onload = [];
  var $this = this;

  this.bubble = {};
  this.bubble.onload = function(func){
    onload.push(func);
  }

  $(window).load(function(){
    $this.bubble = new b_bubble();
    bubble.postCreate();
  })
  
  var b_bubble_OPTIONS = {
    className: "b-bubble",
    classFixed: "b-bubble-fixed",

    opacityUnderLayer: 0.8,

    speed: 400, //ms
    speedSlow: 4000, //ms
    
    shadowSize: 43,
    alwaysOnTop: true,

    animation: "swing",
    animationClose: "easeInBack",
    
    preload: {
      width: 250,
      height: 150
    },
    
    template: 
  		'<div>' +
  			'<div class="b_c">' +
  				'<div class="b_t"><div><div></div></div></div>' +
  				'<div class="b_r"><div><div></div></div></div>' +
  				'<div class="b_b"><div><div></div></div></div>' +
  				'<div class="b_l"><div><div></div></div></div>' +
  				'<div class="b_content_out">' +
			      '<div class="b_close" title="Esc"></div>'+
  					'<div class="b_content">' +
  					'</div>' +
  				'</div>' +
  			'</div>' +
  		'</div>',
  		
		slideshowTemplate:
		  '<div>' +  //class="b-bubble-slideshow"
		    '<div class="prev"></div>' +
		    '<div class="title"></div>' +
		    '<div class="next"></div>' +
		  '</div>'
  		
  }

  this.b_bubble = function(){
  	return this.init.apply(this, arguments);
  }
  
  b_bubble.prototype = {
    init: function(options){
      this.options = $.extend(b_bubble_OPTIONS, options ? options : {});
      
      this.is = {
        created: false,
        opened: false,
        closing: false,
        animate: false,
        loading: false
      }
      
      this.queue = [];
      this.cache = [];
      
      this.create();
    },
    create: function(){
      if(!this.is.created){

        this.ptr = $(this.options.template)
          .css({ left: -9999, top: -9999 })
          .addClass(this.options.className)

        this.ptr.prependTo(document.body);

        this.o = {
          content: this.ptr.find(".b_content"),
          close: this.ptr.find(".b_close"),
          bc: this.ptr.find(".b_c"),
    			eh: this.ptr.find(".b_t div").height(),
    			ew: this.ptr.find(".b_l div").width(),
            
    			oh: this.ptr.find(".b_t, .b_b"),
    			ot: this.ptr.find(".b_r div div, .b_l"),
    			ob: this.ptr.find(".b_r div, .b_l div").not(".b_r div div, .b_l div div"),
            
    			ow: this.ptr.find(".b_r, .b_l"),
    			or: this.ptr.find(".b_t div, .b_b div").not(".b_t div div, .b_b div div"),
    			ol: this.ptr.find(".b_t div div, .b_b")
        }	
		
        this.o.pt = parseInt(this.o.bc.css("padding-top"));
  			this.o.pl = parseInt(this.o.bc.css("padding-left"));
  			
  			//this.ptr.hide();

        if($.browser.msie && $.browser.version < 7)
          this.ptr.wrap($("<div>").addClass(this.options.classFixed).hide())

  			this.underLayer = $("<div>").addClass("b-bubble-under").hide();
  			this.underLayer.insertAfter(this.ptr);
  			
  			this.slideshowControls = $(this.options.slideshowTemplate)
  			  .hide()
  			  .addClass(this.options.className + "-slideshow")
  			  .insertBefore(this.ptr);

  			
  			var $this = this;
  			this.o.close.add(this.underLayer).click(function(evt){
  			  $this.close({ event: evt });
  			})
  			
  			$(document).keyup(function( event ){
  			  if(event.keyCode == 27 && $this.is.opened){
  			    $this.close({ event: event });
  			    return false;
  			  }
  			})
  			
  			
  			
        this.is.created = true;
      }
    },
    
    onload: function(func){
      if($.isFunction(func))
        func.call(window);
    },
    postCreate: function(){
			if(onload.length){
			  for (var i=0; i < onload.length; i++) {
			    if($.isFunction(onload[i]))
			      onload[i].call(window);
			  };
			  onload = [];
			}
    },


    
    addQueue: function(func){
      if(!this.queueCount)
        this.queueCount = 0;
        
      this.queue.push(func);
      this.queueCount++;
      this.check();
    },
    check: function(){
      if(!this.is.animate && this.queue.length){
        this.queue[0].call(this);
        this.queue.shift();
      }
    },
    inCache: function(data){
      for (var i=0; i < this.cache.length; i++) {
        if(this.cache[i].uid && this.cache[i].uid == data)
          return this.cache[i];

        if(this.cache[i].src && this.cache[i].src == data)
          return this.cache[i];

        if(this.cache[i].url && this.cache[i].url == data)
          return this.cache[i];

        if(this.cache[i].node && this.cache[i].node == data)
          return this.cache[i];
      };
      return false;
    },
    cleanCache: function(cache){
      for (var i=0; i < this.cache.length; i++) {
        if(this.cache[i] == cache)
          break;
      }
      this.cache.splice(i, 1);
    },


    animate: function(settings){
      var $this = this;
	  
      if(!this.is.animate){
        this.is.animate = true;
        
        if(!this.is.opened)
          this.ptr.css({ left: -9999, top: -9999 }).show();
        
        if(this.is.opened)
          settings.from = null;

        from = this.normalize(settings.from);
        if(this.is.opened){
          $.extend(from, { width: this.sizes.w, height: this.sizes.h })
        }

  			this.sizes = {
  				w: from.width,
  				h: from.height,
  				l: from.left,
  				t: from.top
  			}

  			this.o.content.css({
  				width: Math.round(this.sizes.w),
  				height: Math.round(this.sizes.h)
  			});

				var top = from.top - this.ptr.height()/2;
				if(this.options.alwaysOnTop && this.options.shadowSize)
  				if(top < -this.options.shadowSize) top = -this.options.shadowSize;

  			this.ptr.css({
  				left: from.left - this.ptr.width()/2,
  				top: top
  			})
  			
  			if(!$.browser.msie && !this.is.opened)
  			  this.ptr.css({ opacity: 0 })

  			this.setLimit();

        to = this.normalize(settings.to);
        
        this.underLayer.css({ opacity: this.options.opacityUnderLayer }).show();

        var speed = this.options.speed;
        try{
          if((settings.event && settings.event.altKey) || window.event.altKey === true)
            speed = this.options.speedSlow;
        } catch(e){}
          

        var animation = this.options.animation;
        if(this.is.closing)
          animation = this.options.animationClose;
          
        var current = this.o.content.children().filter(":visible");
        if(!current.is("img"))
          current = null;
          
  			this.oAni = new Animate(function(now, prev){
  				$this.sizes = {
  					w: $this.sizes.w + ((to.width-from.width)*(now-prev)),
  					h: $this.sizes.h + ((to.height-from.height)*(now-prev))
  				}

  				$this.o.content.css({
  					width: Math.round($this.sizes.w),
  					height: Math.round($this.sizes.h)
  				});
  				
  				if(current)
    				current.css({
    					width: Math.round($this.sizes.w),
    					height: Math.round($this.sizes.h)
    				})
  				
  				var top = from.top + (to.top-from.top)*now - $this.ptr.height()/2;
  				if($this.options.alwaysOnTop)
    				if(top < -$this.options.shadowSize) top = -$this.options.shadowSize;

  				$this.ptr.css({
  					left: from.left + (to.left-from.left)*now - $this.ptr.width()/2,
  					top: top
  				})

  				if(!$.browser.msie && !$this.is.opened)
  					$this.ptr.css({ opacity: to.opacity*now })
  					
  				if(!$.browser.msie && $this.is.closing)
					  $this.ptr.css({ opacity: (1-now) });

  				$this.setLimit();

  			}, speed, animation, function(){

  			  if(settings.message && $this.is.loading){
  			    $this.o.content.append("<span>" + settings.message + "</span>");
  			  }

          $this.is.animate = false;
          $this.is.opened = true;
          $this.check();
  			})

      }
      
      
    },
		setLimit: function(){
			var t = Math.round(this.o.pt + this.sizes.h/2);
			if(t > this.o.eh) t = this.o.eh;
			
			var l = Math.round(this.o.pl + this.sizes.w/2);
			if(l > this.o.ew) l = this.o.ew;
			
			this.o.oh.css({ height: t });
			this.o.ot.css({ top: t });
			if($.browser.msie && $.browser.version < 7 && this.o.ob.parent().height() % 2) t--;
			this.o.ob.css({ bottom: t });

			this.o.ow.css({ width: l });
			this.o.ol.css({ left: l });
			if($.browser.msie && $.browser.version < 7 && this.o.or.parent().width() % 2) l--;
			this.o.or.css({ right: l });
			
		},
    normalize: function(obj){
      var defs = { // default coords and sizes
        width: 30,
        height: 30,
        left: $(window).width()/2,
        top: $(window).height()/2,
        opacity: 1
      }
      
      if(obj){
        var jobj = $(obj);
        if(obj.length > 0 || obj.tagName){ //domNode
          defs.width = jobj.width() > defs.width ? jobj.width() : defs.width;
          defs.height = jobj.height() > defs.height ? jobj.height() : defs.height;
          
          var _offset = jobj.offset();
          defs.left = _offset.left+defs.width/2;
          defs.top = _offset.top+defs.height/2-$(window).scrollTop();
          
        } else { // size object
          if(obj.width < 30) delete obj.width;
          if(obj.height < 30) delete obj.height;
          $.extend(defs, obj)
        }
      }
      return defs;
    },

    
    show: function(data, settings){
      var $this = this;
      var jData = $(data);
	  
	  // Adam Miribyan (http://adammiribyan.com)
	  // Background Color Changing
	  // 7/11/2010
	  this.o.content.css('background-color', settings.bg);
      
      if($.browser.msie && $.browser.version < 7)
        this.ptr.parents("." + this.options.classFixed).show();

      switch(typeof data){
        case "number":
          this.showByCacheId(data, settings);
          break;
          
        case "string":

          if(jData.length > 0){
            // console.log("TODO: animate -> string object")

          } else if(data.split(":")[0] == "remote"){
            var url = data.split(":")[1];
            this.showRemote(url, settings);

          } else if(data.split(":")[0] == "image"){
            var src = data.split(":")[1];
            this.showImage(src, settings);

          } else {
            this.animate(from, to ? to : { width: 200, height: 200 });
            // console.log("TODO: animate -> text")

          }

          break;

        case "object":
          if(jData.length > 0){
            this.showNode(jData, settings);
          }

          break;

      }
      
      return false;

    },
    close: function(settings){
      if(!this.is.closing && this.is.opened){
        this.slideshowControls.hide();
        this.addQueue(function(){
          this.is.closing = true;

          if(this.is.loading)
            this.preload(false);

          if(!settings.to) settings.to = {};
          $.extend(settings.to, { width: 0, height: 0 })
          this.animate(settings);
        });
        this.addQueue(function(){
          if($.browser.msie && $.browser.version < 7)
            this.ptr.parents("." + this.options.classFixed).hide();

          this.underLayer.hide();
          //this.ptr.hide();
          this.ptr.css({ left: -9999, top: -9999 })
          this.o.content.children().hide();

          this.is.opened = false;
          this.is.closing = false;
        });
      }
    },
    preload: function(settings, type){
      if(settings){
        this.addQueue(function(){
          this.is.loading = true;

          this.o.content.children().hide();
          this.ptr.addDependClass("loading");
          if(settings.success)
            this.ptr.addDependClass("loading-success");

          if(!settings.to) settings.to = {};
          $.extend(settings.to, this.options.preload);
          this.animate(settings);
        });
      } else {
        this.ptr.removeDependClass("loading");
        this.ptr.removeDependClass("loading-success");
        this.is.loading = false;
        switch(type){
          case "fade":
            this.o.content.children().fadeOut("fast");
            break;
          default:
            this.o.content.children().hide();
            break;
        }
      }
        
    },
    append: function(node, settings){
      var uid = (new Date()).getTime() + Math.round(Math.random()*9999);
      node = $(node);

      // if(node.parent().length)
      //   node = node.clone(true);

		  node.appendTo(this.o.content);
      this.dimension();

      if(settings && settings.oncreate && $.isFunction(settings.oncreate))
        settings.oncreate.call(this, node);

		  var w = node.outerWidth();
		  var h = node.outerHeight();
		  
		  node.hide();
      this.dimension(false);

		  this.cache.push({ uid: uid, node: node, w: w, h: h });
		  
		  return uid;
      
    },
    dimension: function(hide){
      if($.browser.msie && $.browser.version < 7)
        if(hide === false){
    		  this.ptr.parent().hide();
        } else {
          this.ptr.parent().show()
        }
    },

    
    slideshow: function( root, settings ){
      var self = this;
      this.slideshowControls.show();
      this.slideshowControls.css({ width: this.sizes.w, left: this.o.content.offset().left }).find(".title").text(settings.title ? settings.title : "...");
      var next = this.slideshowControls
        .find(".next")
          .unbind("click")
          .click(function(){
            if(!self.is.animate && root.next().length)
              root.next(".bubble-slideshow-link").click();
          });
          
      if(root.next(".bubble-slideshow-link").length)
        next.removeDependClass("disabled")
      else
        next.addDependClass("disabled")
          
      var prev = this.slideshowControls
        .find(".prev")
          .unbind("click")
          .click(function(){
            if(!self.is.animate && root.prev().length)
              root.prev(".bubble-slideshow-link").click();
          })

      if(root.prev(".bubble-slideshow-link").length)
        prev.removeDependClass("disabled")
      else
        prev.addDependClass("disabled")
          
    },
    
    
    // data types
    showImage: function(src, settings){
      var $this = this;
      var cache = this.inCache(src);
      var root = $(settings.from);
      
      if(cache){

        this.addQueue(function(){
          this.preload(false, "fade");
          cache.node.fadeIn("fast");
          if(!settings.to) settings.to = new Object();
  			  $.extend(settings.to, { width: cache.w, height: cache.h });
          this.animate(settings);
        });
        slideshow( settings );

      } else {
        var t = setTimeout(function(){
          console.log("fire");
          $this.preload(settings);
        }, 100);

        var image = $("<img src='" + src + "' />");
        if($.browser.msie && $.browser.version < 7)
          $("." + this.options.classFixed).append(image);
        else
          $(document.body).append(image);
				image.css({ position: "absolute", left: -9999, top: -9999, border: "none" });

				image.load(function() {
				  var w = image.width();
				  var h = image.height();
				  $this.cache.push({ src: src, node: image, w: w, h: h })

          $this.addQueue(function(){
            this.preload(false);
  				  if(t){
  				    clearTimeout(t)
  				  } else {
      			  settings.from = null;
  				  }

            image.removeAttr("style").appendTo(this.o.content).hide().fadeIn("fast");
    			  $.extend(true, settings.to = {}, { width: w, height: h })
            this.animate(settings);
          })
          slideshow( settings );
				});
      }
      
      function slideshow(settings){
        settings.event = $.event.fix( settings.event || window.event );
        var parentSlideshow = $(settings.event.target).parents(".bubble-slideshow");
        if(parentSlideshow.length)
          $this.addQueue(function(){
            this.slideshow(root, settings);
          })
      }
    },

    // data types
    showRemote: function(url, settings){
      var cache = this.inCache(url);

      if(cache && !settings.reload){
        this.preload(false);

        cache.node.show();
        if(!settings.to) settings.to = new Object();
			  $.extend(settings.to, { width: cache.w, height: cache.h });

        this.animate(settings);

      } else {
        var $this = this;
        
        if(cache && settings.reload)
          this.cleanCache(cache);
        
        var request = {
          url: url,
          dataType: "html",
          success: function(data){
            var node = $(data).css({ visibility: "hidden", position: "absolute", left: -9999, top: -9999 });
            
            var queue = $this.queueCount;

    			  node.appendTo($this.o.content);
  				  var w = node.outerWidth();
  				  var h = node.outerHeight();
  				  node.hide();

    			  if(w*h == 0){
    			    if($this.queueCount == queue){
      			    $this.close(settings);
    			    }
    			  } else {
              if(!settings.reload)
      			    $this.cache.push({ url: url, node: node, w: w, h: h });

              $this.addQueue(function(){
                this.preload(false);

                node.removeAttr("style");

        			  $.extend(settings.to, { width: w, height: h })
        			  settings.from = null;
                this.animate(settings);
              })
    			  }

            
          }
        }
        
        if(settings.serialize){
          var form = $("#" + settings.serialize);
          var data = { data: form.serialize(), type: form.attr("method") ? form.attr("method").toUpperCase() : "POST" };
          $.extend(request, data);
        }
        
        this.preload(settings);
        $.ajax(request)

      }
    },

    showNode: function(node, settings){
      var cache = this.inCache(node.get(0));
      if(cache){
        this.showByCacheId(cache.uid, settings);
      } else {
        var uid = this.append(node);
		    this.cache.push({ node: node.get(0), uid: uid });
        this.showByCacheId(uid, settings);
      }
    },

    
    showByCacheId: function(uid, settings){
      var cache = this.inCache(uid);
      if(cache){
        this.preload(false);
        
			  cache.node.show();

			  if(settings && settings.onshow && $.isFunction(settings.onshow))
			    settings.onshow.call(this, cache.node);

        if(!settings.to) settings.to = new Object();
			  $.extend(settings.to, { width: cache.w, height: cache.h });
        this.animate(settings);
      }
    }

  }
  
})(jQuery);