/*global jQuery, clearInterval, setInterval */

function Animate(step, duration, easing, callback){
	this.opt = {
		step: step,
		complete: callback ? callback : function(){}
	};
	if(jQuery.isFunction(easing)) {this.opt.complete = easing;}

	this.now = 0;
	this.duration = duration;

	this.easing = !jQuery.isFunction(easing) ? easing : "swing";

	this.init();
	
}
Animate.prototype = {
	init: function(){
		var oThis = this;
		this.startTime = (new Date()).getTime();
		this.timerId = setInterval(function(){
			oThis.next();
		}, 13);
	},
	next: function(){
		this.prev = this.now;
		var t = (new Date()).getTime();
		this.step = t - this.startTime;

		if(this.step > this.duration){
			this.step = this.duration;
			this.exec();
			clearInterval(this.timerId);
			this.opt.complete.apply(this);
			return;
		}
		
		this.exec();
	},
	exec: function(){
		this.state = this.step / this.duration;
		this.now = jQuery.easing[this.easing](this.state, this.step, 0, 1, this.duration);
		this.opt.step.apply(this, [this.now, this.prev]);
	},
	stop: function(){
		clearInterval(this.timerId);
	}
};