/**
 * @author Vlad Yakovlev (red.scorpix@gmail.com)
 * @link www.scorpix.ru
 * @version 0.1
 * @data 2010-01-29
 * @requires jQuery
 */

/**
 * Делает изображеня круглыми.
 * @param {jQuery} blocks Блоки, у которых, нужно сделать круглыми края.
 */
function roundPicture(blocks) {
	var createRound;

	if ($c.support.canvas) {

		createRound = function(params) {
			var canvas = $('<canvas />').prependTo(params.root).attr({
				height: params.height,
				width: params.width
			}).css({
				display: 'block',
				left: 0,
				position: 'absolute',
				top: 0
			});

			var ctx = canvas.get(0).getContext('2d');

			ctx.fillStyle = params.backColor;
			drawShapeCanvas(ctx, params, params.borderWidth);

			if (params.image) {
				ctx.globalCompositeOperation = 'source-atop';
				ctx.drawImage(params.image, 0, 0, params.width, params.height);
			}

			if (params.borderWidth) {
				ctx.globalCompositeOperation = 'destination-over';
				ctx.fillStyle = params.borderColor;
				drawShapeCanvas(ctx, params, 0);
			}
		};

		var drawShapeCanvas = function(ctx, params, border) {
			var
				r = params.radius,
				h = params.height,
				w = params.width;

			ctx.beginPath();
			ctx.moveTo(r + border, 0 + border);
			ctx.lineTo(w - r - border, 0 + border);
			ctx.arc(w - r, r, r - border, -Math.PI / 2, 0, false);
			ctx.lineTo(w - border, h - r - border);
			ctx.arc(w - r, h - r, r - border, 0, Math.PI / 2, false);
			ctx.lineTo(r + border, h - border);
			ctx.arc(r, h - r, r - border, Math.PI / 2, Math.PI, false);
			ctx.lineTo(0 + border, r + border);
			ctx.arc(r, r, r - border, Math.PI, Math.PI * 3 / 2, false);
			ctx.fill();
			//ctx.closePath();
		};
	} else if ($c.support.vml) {

		createRound = function(params) {
			var
				w = params.width,
				h = params.height,
				r = params.radius;

			var shapeEl = $(document.createElement('v:shape')).css({
				height: h,
				left: 0,
				position: 'absolute',
				top: 0,
				width: w
			}).attr({
				coordsize: w + ' ' + h,
				fillcolor: params.backColor,
				path: 'm ' + r + ',0 l ' + (w - r) + ',0 qx ' + w + ',' + r + ' l ' + w + ',' + (h - r) + ' qy ' +
					(w - r) + ',' + h + ' l ' + r + ',' + h + ' qx 0,' + (h - r) + ' l 0,' + r + ' qy ' + r + ',0'
			}).prependTo(params.root);

			$(document.createElement('v:fill')).attr({
				color: params.backColor,
				src: params.image.src,
				type: 'frame'
			}).appendTo(shapeEl);

			if (params.borderWidth) {
				$(document.createElement('v:stroke')).attr({
					color: params.borderColor,
					width: params.borderWidth + 'pt'
				}).appendTo(shapeEl)
			} else {
				shapeEl.attr('stroked', 'False');
			}
		};
	} else {
		return;
	}

	blocks.each(function() {
		var el = $(this);
		var params = getElementParams(el);
		params.root = el;

		var image = new Image();
		params.image = image;
		$(image).load(function() {
			var cssParams = {
				background: 'none',
				border: 0
			};

			if (params.borderWidth) {
				cssParams.width = params.width + params.borderWidth * 2;
				cssParams.height = params.height + params.borderWidth * 2;
			} else {
				cssParams.width = params.width;
				cssParams.height = params.height;
			}
			if ('static' == el.css('position')) {
				cssParams.position = 'relative';
			}

			if ($c.browser.webkit) {
				var radius = cssParams.width < cssParams.height ? cssParams.width : cssParams.height;

				el.find('img').css({
					'-webkit-border-radius': radius + 'px',
					'border-radius': radius + 'px'
				});
			} else {
				el.css(cssParams).find('img').css('opacity', 0);
				createRound(params);
			}
		});
		image.src = el.find('img').attr('src');
	});

	function getElementParams(el) {
		var width = el.find('img').width();
		var height = el.find('img').height();

		var result = {
			backColor: el.css('background-color'),
			borderColor: el.css('border-top-color'),
			borderWidth: parseInt(el.css('border-top-width'))
		};

		if ('transparent' == result.backColor) {
			result.backColor = '#ffffff';
		}

		if (!$c.support.canvas && result.borderWidth) {
			width -= result.borderWidth * 2;
			height -= result.borderWidth * 2;
		}

		result.radius = Math.round(width < height ? width / 2 : height / 2);
		result.height = height;
		result.width = width;

		return result;
	}
}

$(function() {
	roundPicture($('.round_picture'));
});