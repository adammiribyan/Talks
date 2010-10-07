/**
 * @author Vlad Yakovlev (red.scorpix@gmail.com)
 * @copyright Art.Lebedev Studio (http://www.artlebedev.ru)
 * @version 0.3 alpha 9
 * @date 2010-02-26
 * @requires jQuery 1.4.2
 *
 * @changelog
 * Version 0.3 alpha 9
 * Добавлен <code>jCommon.bezierCoords</code>.
 * Доработан <code>jCommon.attrSuffix</code>. Написаны тесты.
 * Доработан <code>jCommon.betweenNumber</code>. Написаны тесты.
 * В <code>jCommon.popupWindow</code> убрано навешивание события на все элементы с классом <code>popup</code>.
 * <code>jCommon.popupBlock</code> обновился до версии 2.1.6.
 * Вместо метода <code>dragDrop</code> добавлен <code>jCommon.draggable</code>.
 * <code>jCommon.extend</code> теперь возвращает объект.
 * Добавлены алиасы <code>plus</code> и <code>minus</code> в <code>jCommon.keyCode</code>.
 * Методы <code>jCommon.shortcuts</code> возвращает сам объект теперь.
 * Добавлен <code>jCommon.supplant</code>.
 *
 * @changelog
 * Version 0.3 alpha 8
 * Оптимизирован <code>jCommon.cookie</code>.
 * Оптимизирован <code>jCommon.popupWindow</code>.
 * Добавлен <code>jCommon.keyCode</code>.
 * Изменен <code>jCommon.shortcuts</code>. Инициализация ссылок по <code>link</code> производится вне объекта.
 * Изменен <code>jCommon.fixIePng</code>. Добавлены дополнительные настройки.
 * Добавлен <code>jCommon.extend</code>.
 * Добавлена возможность наследования классов.
 * Добавлен <code>jCommon.abstract</code>.
 * Добавлен <code>jCommon.loadImage</code>.
 * <code>jCommon.getSuffixClass</code> переименован в <code>jCommon.attrSuffix</code>.
 * <code>jCommon.getXml</code> переименован в <code>jCommon.xmlObject</code>.
 * Добавлен <code>jCommon.betweenNumber</code>.
 * Добавлен <code>jCommon.cleanToNumber</code>.
 * Добавлен <code>jCommon.findInArray</code>.
 * Добавлен <code>jCommon.formatNumber</code>.
 * Добавлен <code>jCommon.inject</code>.
 * Добавлен <code>jCommon.shuffleArray</code>.
 * Добавлен <code>jCommon.sortNum</code>.
 * Добавлен <code>jCommon.stripTags</code>.
 * Добавлены методы массивов, которые появились в JavaScript 1.6 для тех браузеров, которые не поддерживают их (по крайней мере, IE lte 7): <code>every</code>, <code>filter</code>, <code>forEach</code>, <code>indexOf</code>, <code>lastIndexOf</code>, <code>map</code>, <code>some</code>.
 * Добавлены методы для работы с SVG-элементами.
 * Добавлены <code>jCommon.hex2Rgb</code> и <code>jCommon.rgb2Hex</code>.
 * Добавлен <code>jCommon.random</code>.
 * Добавлены методы в jQuery для драг-н-дропа: <code>jQuery.drag</code>, <code>jQuery.releaseDrag</code>, <code>jQuery.undrag</code>.
 *
 * @changelog
 * Version 0.2.3.3
 * Добавлен параметр <code>antialias</code> для VML-элементов.
 *
 * @changelog
 * Version 0.2.3.2
 * Исправлен баг в <code>jCommon.webkitPlaceholder</code>.
 * <code>jCommon.eventDispatcher</code> теперь возвращает объект.
 * Добавлена функция <code>jCommon.getSuffixClass()</code>.
 * Теперь можно обращаться к <code>jCommon</code> через знак доллара — <code>$c</code>.
 *
 * @changelog
 * Version 0.2.3.1
 * Исправлен баг в <code>jCommon.measurer</code>.
 * Добавлена функция <code>jCommon.getXml</code>.
 *
 * @changelog
 * Version 0.2.3
 * <code>jCommon.popup</code> переименован в <code>jCommon.popupWindow</code>, исправлены ошибки, добавлены комментарии.
 * <code>jCommon.keyNavigation</code> переименован в <code>jCommon.shortcuts</code>, добавлены комментарии.
 * <code>jCommon.popupBlock</code> дорос до версии 2.1.5.
 * <code>jCommon.labelPlaceholder</code> дорос до версии 0.1.2.
 * Добавлен <code>jCommon.eventDispatcher</code> версии 1.0.
 *
 * @changelog
 * Version 0.2.2
 * Добавлен <code>jCommon.ns.ev</code>.
 *
 * @changelog
 * Version 0.2.1
 * Механизм фикса полупрозрачных png в IE6 перенесен в функцию <code>jCommon.fixIePng</code>.
 * Вместо переменной <code>jCommon.isCanvas</code> теперь <code>jCommon.support</code>, который имеет три свойства-флага: <code>canvas</code>, <code>svg</code>, <code>vml</code>.
 * Механизм создания плейсхолдеров, как в Webkit, перенесен в <code>jCommon.webkitPlaceholder</code>. Можно добавлять вручную текстовые элементы формы.
 * <code>jCommon.utils</code> перенесен в <code>jCommon.keyNavigation</code> и <code>jCommon.poup</code>.
 * Добавлен <code>jCommon.ns</code>, который содержит неймспейсы <code>svg</code> и <code>xlink</code>.
 * Добавлен <code>jCommon.labelPlaceholder</code>.
 * Добавлен <code>jCommon.browser</code>.
 * Добавлен <code>jCommon.popupBlock</code>.
 * Удален <code>jCommon.object</code>.
 * Исправление бага — теперь не добавляются новые html-элементы в <code>jCommon.measurer</code>.
 */

(function() {
	window.jCommon = window.$c = {

		/**
		 * Кидает исключение.
		 * @param {String} [message]
		 */
		'abstract': function(message) {
			throw('Abstract' + (message ? ': ' + message : ''));
		},


		/**
		 * Возвращает суффикс по заданному префиксу у значения атрибута элемента.
		 * @param {String|Element|jQuery} el
		 * @param {String} prefix
		 * @param {String} [attrName = 'class']
		 * @return {String}
		 *
		 * @example
		 * $c.attrSuffix($(<div class="block id_2"></div>), 'id_'); // 2
		 * $c.attrSuffix($(<div id="id_2"></div>), 'id_', 'id'); // 2
		 */
		attrSuffix: function(el, prefix, attrName) {
			var
				pattern = new RegExp('\\b(' + prefix + '\\w*)\\b'),
				parts = pattern.exec($(el).attr(attrName || 'class'));

			return parts && parts[1] ? parts[1].substr(prefix.length) : false;
		},


		/**
		 * Определяет, находится ли значение первого аргумента в диапазоне.
		 * @param {Number|String} source Проверяемое значение.
		 * @param {Number} a Первое значение диапазона.
		 * @param {Number} b Второе значение диапазона.
		 * @param {Boolean} [strict = false] Флаг строгого соответствия.
		 * @return {Boolean}
		 *
		 * @example
		 * $c.betweenNumber(101, 100, 200); // true
		 * $c.betweenNumber(101, 200, 100); // true
		 * $c.betweenNumber(100, 200, 100, true); // true
		 */
		betweenNumber: function(source, a, b, strict) {
			var
				min = Math.min(a, b),
				max = Math.max(a, b),
				value = source.valueOf();

			return strict ? min <= value && value <= max : min < value && value < max;
		},

		/**
		 * @author John Resig (http://jquery.com/), Vlad Yakovlev (red.scorpix@gmail.com)
		 * @version 1.0
		 */
		browser: function() {
			var userAgent = window.navigator.userAgent.toLowerCase();

			return {
				version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1],
				webkit: /webkit/.test(userAgent),
				opera: /opera/.test(userAgent),
				msie: /msie/.test(userAgent) && !/opera/.test(userAgent),
				mozilla: /mozilla/.test(userAgent ) && !/(compatible|webkit)/.test(userAgent),
				safari: /safari/.test(userAgent) && !/chrome/.test(userAgent),
				chrome: /chrome/.test(userAgent)
			};
		}(),


		bezierCoords: function(parents, t) {

			while (3 < parents.length) {
				var childs = [];

				for (var i = 0; i < parents.length - 2; i++) {
					childs.push(parents[i] + (parents[i + 2] - parents[i]) * t);
				}

				parents = childs;
			}

			return parents;
		},


		/**
		 * Очищает строку от нечисловых символов, приводя ее к числу.
		 * @param {String} source
		 * @return {Number}
		 */
		cleanToNumber: function(source) {
			var mayBeNumber = source.valueOf().replace(/[^\d\.]/g, '');

			return '' === mayBeNumber || isNaN(mayBeNumber) ? NaN : new Number(mayBeNumber);
		},


		/**
		 * Создает куки или возвращает значение.
		 *
		 * @example $c.cookie('the_cookie', 'the_value');
		 * @desc Задает куки для сессии.
		 *
		 * @example $c.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'site.com', secure: true });
		 * @desc Создает куки с опциями.
		 *
		 * @example $c.cookie('the_cookie', null);
		 * @desc Удаляет куки.
		 *
		 * @example $c.cookie('the_cookie');
		 * @desc Возвращает значение куки.
		 *
		 * @param {String} name Имя куки.
		 * @param {String} value Значение куки.
		 * @param {Object} options Объект опций куки.
		 * @option {Number|Date} expires Either an integer specifying the expiration date from now on in days or a Date object.
		 *                               If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
		 *                               If set to null or omitted, the cookie will be a session cookie and will not be retained
		 *                               when the the browser exits.
		 * @option {String} path The value of the path atribute of the cookie (default: path of page that created the cookie).
		 * @option {String} domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
		 * @option {Boolean} secure If true, the secure attribute of the cookie will be set and the cookie transmission will
		 *                          require a secure protocol (like HTTPS).
		 *
		 * @return {mixed|jCommon} Значение куки или объект jCommon.
		 *
		 * @author Klaus Hartl (klaus.hartl@stilbuero.de), Vlad Yakovlev (red.scorpix@gmail.com)
		 * @version 1.0.1
		 * @date 2009-11-12
		 */
		cookie: function(name, value, options) {

			if ('undefined' != typeof value) {
				options = options || {};

				if (null === value) {
					value = '';
					options.expires = -1;
				}

				// CAUTION: Needed to parenthesize options.path and options.domain in the following expressions,
				// otherwise they evaluate to undefined in the packed version for some reason…
				var
					path = options.path ? '; path=' + options.path : '',
					domain = options.domain ? '; domain=' + options.domain : '',
					secure = options.secure ? '; secure' : '',
					expires = '';

				if (options.expires && ('number' == typeof options.expires || options.expires.toUTCString)) {
					var date;

					if ('number' == typeof options.expires) {
						date = new Date();
						date.setTime(date.getTime() + (options.expires * 86400000/*24 * 60 * 60 * 1000*/));
					} else {
						date = options.expires;
					}

					expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
				}

				window.document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');

				return this;
			}

			var cookieValue = null;

			if (document.cookie && '' != document.cookie) {
				$.each(document.cookie.split(';'), function() {
					var cookie = $.trim(this);

					// Does this cookie string begin with the name we want?
					if (cookie.substring(0, name.length + 1) == (name + '=')) {
						cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

						return false;
					}
				});
			}

			return cookieValue;
		},


		/**
		 * Позволяет расширять объекты.
		 * @param {Object} destination Объект, которому добавляются свойства.
		 * @param {Object} source Источник свойств.
		 * @param {Boolean} [replace = false] Заменять ли свойство, если оно уже присутствует в объекте.
		 * @return {Object} Объект со свойствами.
		 */
		extend: function(destination, source, replace) {
			if (!('object' === typeof destination || $.isFunction(destination))) {
				destination = {};
			}
			if (!('object' === typeof source || $.isFunction(source))) {
				source = {};
			}

			for (var i in source) {
				if (source.hasOwnProperty(i) && (replace || undefined === destination[i]) && undefined !== source[i]) {
					destination[i] = source[i];
				}
			}

			return destination;
		},


		/**
		 *
		 * @param {Array} source
		 * @param {mixed} searchStr
		 * @return {Array}
		 */
		findInArray: function(source, searchStr) {
			var returnArray = false;

			for (var i = 0; i < source.length; i++) {
				if ('function' == typeof(searchStr)) {
					if (searchStr.test(source[i])) {
						if (!returnArray) {
							returnArray = [];
						}

						returnArray.push(i);
					}
				} else {
					if (source[i] === searchStr) {
						if (!returnArray) {
							returnArray = [];
						}

						returnArray.push(i);
					}
				}
			}

			return returnArray;
		},


		/**
		 * Фикс полупрозрачных PNG в IE6.
		 * @param {String|Element|Array[Element]|jQuery} el Элемент, у которого нужно сделать фикс.
		 * @param {Object} [options]
		 * @option {Boolean} [allIe = false] Флаг, для всех ли версий IE применять фильтр.
		 * @option {String} [scaleMode = 'crop'] Режим масштабирования.
		 * @option {String} [emptySrc] Путь к файлу прозрачного изображения.
		 * @option {Boolean} [notReplaceImg = false] Флаг «не заменять src изображения».
		 *
		 * @example
		 * .png {
		 * 	filter:expression($c.fixIePng(this));
		 * }
		 * @description Добавляем для всех элементов в IE 6 и старше принудительный фильтр.
		 *
		 * @example $c.fixIePng('img', true, 'scale');
		 * @description Добавляем для всех изображений во всех IE фильтр с режимом <code>scale</code>.
		 *
		 * @version 1.1
		 * @date 2009-11-13
		 */
		fixIePng: function() {

			var
				reScaleMode = /iesizing_(\w+)/,
				prefix = 'file:///',
				/** Путь к прозрачному гифу. */
				gifPath = prefix == location.href.substr(0, prefix.length) ? './i/0.gif' : '/f/global/i/0.gif';

			/**
			 * Добавляет фильтр.
			 * @param {Element} el
			 * @param {Object} [options]
			 * @option {String} [scaleMode = 'crop'] Режим масштабирования.
			 * @option {String} [emptySrc] Путь к файлу прозрачного изображения.
			 * @option {Boolean} [notReplaceImg = false] Флаг «не заменять src изображения».
			 */
			function filter(el, options) {
				var scaleMode = options.scaleMode || 'crop';
				var emptySrc = options.emptySrc || gifPath;

				var src;

				if (('IMG' == el.tagName || ('INPUT' == el.tagName && 'image' == el.type)) && !options.notReplaceImg) {
					if (/\.png$/.test(el.src)) {
						src = el.src;
						el.src = emptySrc;
					}
				} else {
					src = el.currentStyle.backgroundImage.match(/url\("(.+\.png)"\)/i);

					if (src) {
						src = src[1];
						el.runtimeStyle.backgroundImage = 'none';
					}
				}

				var m = reScaleMode.exec(el.className);

				if (m) {
					scaleMode = m[1];
				}

				if (src) {
					el.runtimeStyle.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "',sizingMethod='" + scaleMode + "')";
				}
			}

			return function(el, options) {
				if (!$c.browser.msie) return;

				options = options || {};

				if (options.allIe || 6 >= parseInt($c.browser.version)) {
					$(el).each(function() {
						filter(this, options);
					});
				}
			};
		}(),


		/**
		 *
		 * @param {String|Number} source
		 * @param {String} [groupSeparator = ' ']
		 * @param {String} [fractionSeparator = ',']
		 * @return {String}
		 */
		formatNumber: function(source, groupSeparator, fractionSeparator) {
			source = source.toString();

			var
				groupSeparator = groupSeparator || ' ',
				fractionSeparator = fractionSeparator || ',',
				/** @type {Number} */
				fractionIndex = source.indexOf('.'),
				/** @type {String} */
				fraction = fractionIndex > -1 ? source.substring(fractionIndex + 1) : '',
				/** @type {String} */
				number = fractionIndex > -1 ? source.substring(0, fractionIndex) : source;

			if (5 > number.length) {
				return number + (fractionIndex > -1 ? fractionSeparator + fraction : '');
			}

			var result = '';

			while (3 < number.length) {
				result = number.substring(number.length - 3) + (result.length > 0 ? groupSeparator : '') + result;
				number = number.substring(0, number.length - 3);
			}

			result = number + groupSeparator + result + (-1 < fractionIndex ? fractionSeparator + fraction : '');

			return result;
		},


		/**
		 * Шаблонизирует текущую строку, впрыскивая в нужные места значения из oData.
		 * @example "height:{hey}px{semi}".inject({ hey: 100, semi: ";" }) -> "height:100px;".
		 * @param {String} s
		 * @param {Object} data
		 * @return {String}
		 */
		inject: function(s, data){
			return s.replace(/{([^{}]*)}/g, function(match, itemKey) {
				var itemData = data[itemKey];

				return undefined !== itemData && ('string' === typeof itemData || 'number' === typeof itemData) ? new String(itemData) : match;
			});
		},


		/**
		 * Загружает изображение.
		 * @param {String} src Путь к файлу изображения.
		 * @param {Function} [callback] Функция, вызываемая по окончании загрузки.
		 */
		loadImage: function(src, callback) {
			var imgEl = new Image();
			$(imgEl).load(callback || $.noop);
			imgEl.src = src;
		},


		/**
		 * Попапы с открытием нового окна браузера.
		 *
		 * После загрузки документа автоматически создаются хэндлеры на создание попапов у элементов с классом <code>popup</code>.
		 * @param {String|Array[Element]|Element|jQuery} el Элемент(ы) jQuery.
		 * @param {Object} options Свойства создаваемого окна.
		 *
		 * @example $c.popupWindow.add('.popup_els', { menubar: 'yes' });
		 *
		 * @version 0.1.3
		 * @date 2010-02-15
		 */
		popupWindow: function() {

			/**
			 * Класс для создания попапов.
			 * @param {String|Array[Element]|Element|jQuery} el Элемент(ы) jQuery.
			 * @param {Object} options Свойства создаваемого окна.
			 */
			function popup(el, options) {

				$(el).click(function() {
					bind($(this).attr('href'), '', undefined === options ? {} : options);

					return false;
				});

				/**
				 * Создает попап.
				 * @param {String} url Адрес, по которому откроется попап. Если указано изображение, то создается тело документа с изображением внутри.
				 * @param {String} name Тайтл окна.
				 * @param {Object} options Свойства окна.
				 */
				function bind(url, name, options) {
					var popupDefaults = {
						height: 600,
						menubar: 'no',
						resizeable: 'yes',
						scrollbars: 'yes',
						status: 'yes',
						toolbar: 'no',
						width: 540
					};
					var optionsPlane = [];
					var empty = {};

					$c.extend(options, popupDefaults);
					options.left = Math.round((screen.availWidth - options.width) / 2);
					options.top = Math.round((screen.availHeight - options.height) / 2);

					$.each(options, function() {
						optionsPlane.push(id + '=' + this);
					});

					/** @type {Window} */
					var newWindow = window.open(url, '', optionsPlane.join(','));

					if (url.match(/\.(gif|jpe?g|png)$/i)) {
						newWindow.document.open();
						newWindow.document.write('<html><head>' + ('' != name ? '<title>' + name + '</title>' : '') + '</head><body style="background: #fff; margin: 0; padding: 0;">' +
							'<table cellpadding="0" cellspacing="0" border="0" width="100%" height="100%"><tr><td align="center">' +
							'<img src="' + url + '" />' + '</td></tr></table></body></html>');
						newWindow.document.close();
					}

					newWindow.focus();
				}
			}

			return function(el, options) {
				$(el).each(function() {
					popup(this, options);
				});
			};
		}(),


		/**
		 * Возвращает случайное целое число.
		 * @param {Number} min Минимальное значение.
		 * @param {Number} max Максимальное значение.
		 * @requires {Number}
		 */
		random: function(min, max) {
			min = parseInt(min);
			max = parseInt(max);

			return Math.floor(Math.random() * (max - min + 1)) + min;
		},


		/**
		 * Перемешивает массив.
		 * @param {Array} source
		 */
		shuffleArray: function(source) {
			for (var rnd, tmp, i = source.length; i; rnd = parseInt(Math.random() * i), tmp = source[--i], source[i] = source[rnd], source[rnd] = tmp);
		},


		/**
		 * Сортирует числовой массив.
		 * @param {Array} source
		 * @return {Array}
		 */
		sortNum: function(source) {
			return source.sort(function (a, b) {
				return a - b;
			});
		},


		/**
		 * Удаляет тэги.
		 * @return {String} source
		 * @return {String}
		 */
		stripTags: function(source) {
			return source.replace(/<\/?[^>]+>/gi, '');
		},

		/**
		 * supplant() does variable substitution on the string. It scans
		 * through the string looking for expressions enclosed in {} braces.
		 * If an expression is found, use it as a key on the object,
		 * and if the key has a string value or number value, it is
		 * substituted for the bracket expression and it repeats.
		 */
		supplant: function(str, o) {
			return str.replace(/{([^{}]*)}/g,
				function(a, b) {
					var r = o[b];
					return 'string' === typeof r || 'number' === typeof r ? r : a;
				}
			);
		},


		/**
		 * Проверка поддержки SVG, Canvas и VML.
		 * Возвращает объект с тремя свойствами-флагами: <code>canvas</code>, <code>svg</code> и <code>vml</code>.
		 * Если VML поддерживается, то инициализируются неймспейсы.
		 *
		 * @version 1.0
		 */
		support: function() {
			var result = {
				canvas: false,
				svg: document.createElementNS ? true : false,
				vml: false
			};

			if ('undefined' == typeof(HTMLCanvasElement)) {
				// В IE для VML надо добавить схему и стили.
				if (!document.namespaces['v']) {
					document.namespaces.add('v', 'urn:schemas-microsoft-com:vml');
					document.namespaces.add('o', 'urn:schemas-microsoft-com:office:office');

					var ss = document.createStyleSheet();
					ss.cssText = 'v\\:arc,v\\:curve,v\\:extrusion,v\\:fill,v\\:formulas,v\\:group,v\\:handles,v\\:image,v\\:imagedata,v\\:line,v\\:oval,v\\:path,v\\:polyline,v\\:rect,v\\:roundrect,v\\:shadow,v\\:shape,v\\:shapetype,v\\:stroke,v\\:textbox,v\\:textpath,v\\:vmlframe{behavior:url(#default#VML);display:block;} o\\:callout, o\\:locks, o\\:skew {behavior:url(#default#VML);antialias:true;}';
				}

				result.vml = true;
			} else {
				result.canvas = true;
			}

			return result;
		}(),


		/**
		 * Возвращает XML из строки.
		 * @param {String} text XML в строке.
		 * @return {Element} XML в объекте.
		 *
		 * @version 1.0
		 * @date 2009-08-18
		 *
		 * @example
		 * $.ajax({
		 *   dataType: 'text', // Обязательно, если хочешь получить XML
		 *   success: function(data) {
		 *     var xmlData = $c.xmlObject(data);
		 *     xmlData = $('result', xmlData);
		 *   }
		 *   // Другие параметры
		 * });
		 */
		xmlObject: function(text) {
			var xmlData = null;

			try {
				if (window.ActiveXObject) { // IE
					xmlData = new ActiveXObject('Microsoft.XMLDOM');
					xmlData.async = false;
					xmlData.loadXML(text);
				} else if (window.DOMParser) { // Все остальные
					var xmlData = (new DOMParser()).parseFromString(text, 'text/xml');
				}

				if (!xmlData || !xmlData.documentElement || 'parsererror' == xmlData.documentElement.nodeName
					|| xmlData.getElementsByTagName('parsererror').length) {
					return false;
				}
			} catch (error) {
				return false;
			}

			return xmlData;
		}

	};



	$c.extend(Function, {
		/**
		 * Реализует наследование классов.
		 * @param {Function} BaseClass Базовый класс, от которого наследуется текущий класс.
		 * @param {Object} overrides Перезаписываемые свойства.
		 */
		inheritFrom: function(BaseClass, overrides){
			var Inheritance = function() {};
			Inheritance.prototype = BaseClass.prototype;
			this.prototype = new Inheritance();
			this.prototype.constructor = this;
			this.baseConstructor = BaseClass;
			this.superClass = BaseClass.prototype;

			if (overrides) {
				for(var i in overrides) {
					this.prototype[i] = overrides[i];
				}
			}
		}
	});

	/**
	 * Навигация по ссылкам в тэгах <code>link</code>.
	 */
	$(function() {
		var navigationLinks = {
			start: 'home',
			prev: 'left',
			up: 'up',
			next: 'right',
			down: 'down'
		};

		$('head link').each(function() {
			var rel = $(this).attr('rel');

			if (navigationLinks[rel]) {
				$c.shortcuts.bind({
					keyCode: $c.keyCode(navigationLinks[rel]),
					ctrlCode: true
				}, $(this).attr('href'));
			}
		});
	});


	/**
	 * Фикс кэширования картинок на странице в IE6.
	 */
	if ($c.browser.msie && 6 >= parseInt($c.browser.version)) {
		try {
			document.execCommand('BackgroundImageCache', false, true);
		} catch(e) {}
	}


	$c.extend(Array.prototype, {

		every: function(fun /*, thisp*/) {
			var len = this.length;

			if ('function' != typeof fun) {
				throw new TypeError('Not Function');
			}

			var thisp = arguments[1];

			for (var i = 0; i < len; i++) {
				if (i in this && !fun.call(thisp, this[i], i, this)) {
					return false;
				}
			}

			return true;
		},

		filter: function(fun /*, thisp*/) {
			var len = this.length;

			if ('function' != typeof fun) {
				throw new TypeError('Not Function');
			}

			var res = new Array();
			var thisp = arguments[1];

			for (var i = 0; i < len; i++) {
				if (i in this) {
					var val = this[i]; // in case fun mutates this

					if (fun.call(thisp, val, i, this)) {
						res.push(val);
					}
				}
			}

			return res;
		},

		forEach: function(fun /*, thisp*/) {
			var len = this.length;

			if ('function' != typeof fun) {
				throw new TypeError('Not Function');
			}

			var thisp = arguments[1];

			for (var i = 0; i < len; i++) {
				if (i in this) {
					fun.call(thisp, this[i], i, this);
				}
			}
		},

		indexOf: function(elt /*, from*/) {
			var len = this.length;
			var from = Number(arguments[1]) || 0;

			from = 0 > from ? Math.ceil(from) : Math.floor(from);

			if (0 > from) {
				from += len;
			}

			for (; from < len; from++) {
				if (from in this && this[from] === elt) {
					return from;
				}
			}

			return -1;
		},

		lastIndexOf: function(elt /*, from*/) {
			var len = this.length;
			var from = Number(arguments[1]);

			if (isNaN(from)) {
				from = len - 1;
			} else {
				from = 0 > from ? Math.ceil(from) : Math.floor(from);

				if (0 > from) {
					from += len;
				} else if (from >= len) {
					from = len - 1;
				}
			}

			for (; from > -1; from--) {
				if (from in this && this[from] === elt) {
					return from;
				}
			}

			return -1;
		},

		map: function(fun /*, thisp*/) {
			var len = this.length;

			if ('function' != typeof fun) {
				throw new TypeError('Not Function');
			}

			var res = new Array(len);
			var thisp = arguments[1];

			for (var i = 0; i < len; i++) {
				if (i in this) {
					res[i] = fun.call(thisp, this[i], i, this);
				}
			}

			return res;
		},

		some: function(fun /*, thisp*/) {
			var len = this.length;

			if ('function' != typeof fun) {
				throw new TypeError('Not Function');
			}

			var thisp = arguments[1];

			for (var i = 0; i < len; i++) {
				if (i in this && fun.call(thisp, this[i], i, this)) {
					return true;
				}
			}

			return false;
		}

	});


	$(document.documentElement || document.body).attr('class', 'js');
})();


/**
 * Расширения
 */

/**
 * Возвращает код клавиши по ее идентификатору.
 * Регистр и пробелы не учитываются.
 * Если идентификатор не известен, возвращает <code>undefined</code>.
 *
 * @example $c.keyCode(1)
 * @description Возвратит 49
 *
 * @example $c.keyCode('Caps Lock')
 * @example $c.keyCode('CApsLock')
 * @description Возвратит 20
 *
 * @param String|Number key Идентификатор клавиши.
 * @return Number Код символа.
 *
 * @version 0.1.1
 * @date 2009-12-08
 *
 * @changelog
 * Version 0.1.1
 * Добавлен код для Tab.
 */
$c.keyCode = function() {
	var codes = {
		alt: 18,
		backspace: 8,
		capslock: 20,
		control: 17,
		ctrl: 17,
		'delete': 46,
		del: 46,
		down: 109,
		end: 35,
		enter: 13,
		escape: 27,
		home: 36,
		insert: 45,
		left: 37,
		minus: 109,
		pagedown: 34,
		pageup: 33,
		plus: 61,
		right: 39,
		shift: 16,
		space: 32,
		tab: 9,
		up: 38
	};

	if (window.jCommon.browser.webkit) {
		codes.plus = 187;
		codes.minus = 189;
	}

	return function(key) {
		return codes[key.toString().replace(' ', '').toLowerCase()];
	};
}();


/**
 * Объект для работы с клавиатурными сокращениями.
 *
 * @example $c.shortcuts.unbind($c.keyCode('Enter'));
 * @description Удаляет действие при нажатии клавиши Enter.
 *
 * @example
 * $c.shortcuts.bind($c.keyCode('Right'), function(evt) {
 * 	alert(evt.keyCode);
 * });
 * или
 * $c.shortcuts.bind('Right', function(evt) {
 * 	alert(evt.keyCode);
 * });
 * @description Привязывает к «стрелка вправо» функцию.
 *
 * @example
 * $c.shortcuts.bind('left right', function(evt) {
 * 	alert(evt.keyCode);
 * });
 * @description Привязывает к «стрелка вправо» или «стрелка влево» функцию.
 *
 * @example
 * $c.shortcuts.bind({
 * 	keyCode: $c.keyCode('Right'),
 * 	ctrlKey: true
 * }, 'http://ya.ru');
 * @description Привязывает к Ctrl + «стрелка вправо» переход на Яндекс.
 *
 * @example $c.shortcuts.unbindAll();
 * @description Удаляет все действия.
 *
 * @version 1.1.1
 * @date 2009-12-27
 */
$c.shortcuts = function() {
	var
		binded = {},
		that = {};

	$(document).keydown(dispatch);

	function dispatch(evt) {
		var links = binded;

		for (var id in binded) {
			if (binded[id].keyCode == evt.keyCode && binded[id].ctrlKey == evt.ctrlKey && binded[id].altKey == evt.altKey && binded[id].shiftKey == evt.shiftKey) {
				if ('string' == typeof links[id].href && '' != binded[id].href) {
					document.location = links[id].href;
					return;
				} else if ($.isFunction(binded[id].href)) {
					return binded[id].href(evt);
				}
			}
		}
	}

	/**
	 * Возвращает идентификатор с учетом спец. клавиш.
	 */
	function keyCodeId(keyCode) {
		if ('number' == typeof keyCode) return keyCode.toString();

		var parts = [ keyCode.keyCode.toString() ];
		keyCode.ctrlCode && parts.push('ctrl');
		keyCode.altCode && parts.push('alt');
		keyCode.shiftCode && parts.push('shift');

		return parts.join('_');
	}

	/**
	 * Привязывает к шорткату клавиатуры действие.
	 *
	 * @param {Number|String|Object} keyCode Код клавиши. Если число, то только код клавиши.
	 *                                Если объект, то код клавиши и спец. клавиши.
	 * @option {Number} [keyCode] Код клавиши.
	 * @option {Boolean} [ctrlKey] Нажат ли <code>Ctrl</code>.
	 * @option {Boolean} [altKey] Нажат ли <code>Alt</code>.
	 * @option {Boolean} [shiftKey] Нажат ли <code>Shift</code>.
	 *
	 * @param {String|Function} href Если строка, то осуществлять переход по адресу, если функция, то выполнить функцию (первый параметр — объект Event).
	 */
	that.bind = function(keyCode, href) {
		var
			code,
			options = {
				href: '',
				keyCode: '',
				ctrlKey: false,
				altKey: false,
				shiftKey: false
			};

		if ('string' == typeof keyCode) {
			$.each(keyCode.split(' '), function() {
				$c.extend(options, {
					href: href,
					keyCode: $c.keyCode(this)
				}, true);
				binded[keyCodeId($c.keyCode(this))] = options;
			});
		} else if ('number' == typeof keyCode) {
			$c.extend(options, {
				href: href,
				keyCode: keyCode
			}, true);
			binded[keyCodeId($c.keyCode(this))] = options;
		} else {
			binded[keyCodeId(keyCode)] = {
				href: href,
				keyCode: keyCode.keyCode,
				ctrlKey: !!keyCode.ctrlCode,
				altKey: !!keyCode.altCode,
				shiftKey: !!keyCode.shiftCode
			};
		}

		return that;
	};

	/**
	 * Удаляет действие для шортката.
	 * @param {Number|String|Object} keyCode Код клавиши. Если число, то только код клавиши.
	 *                                Если объект, то код клавиши и спец. клавиши.
	 * @option {Number} [keyCode] Код клавиши.
	 * @option {Boolean} [ctrlKey] Нажат ли <code>Ctrl</code>.
	 * @option {Boolean} [altKey] Нажат ли <code>Alt</code>.
	 * @option {Boolean} [shiftKey] Нажат ли <code>Shift</code>.
	 */
	that.unbind = function(keyCode) {
		if ('string' == typeof keyCode) {
			$.each(keyCode.split(' '), function() {
				delete binded[keyCodeId($c.keyCode(this))];
			});
		} else {
			delete binded[keyCodeId(keyCode)];
		}

		return that;
	};

	/**
	 * Удаляет все шорткаты.
	 */
	that.unbindAll = function() {
		binded = {};

		return that;
	};

	return that;
}();


/**
 * Отслеживает изменение размеров окна браузера и масштабирование текста.
 * Отслеживание запускается только при добавлении первого хэндлера.
 *
 * @example
 * function funcBind() { alert('yoop'); }
 * $c.measurer.bind(funcBind);
 * @description Теперь функция будет выполняться всякий раз, когда изменится размер окна браузера или размер текста.
 * $c.measurer.unbind(funcBind);
 * @description А теперь — нет.
 *
 * @version 1.0
 */
$c.measurer = function() {

	var
		callbacks = [],
		interval = 500,
		curHeight,
		el,
		isInit = false,
		isDocReady = false;

	$(function() {
		isDocReady = true;
		isInit && initBlock();
	});

	function initBlock() {
		el = $('<div></div>').css({
			height: '1em',
			left: 0,
			lineHeight: '1em',
			margin: 0,
			position: 'absolute',
			padding: 0,
			top: '-1em',
			visibility: 'hidden',
			//width: '100%'
			width: '1em'
		}).appendTo('body');

		/**
		 * В IE событие <code>onresize</code> срабатывает и на элементах.
		 */
		if ($c.browser.msie) {
			el.resize(callFuncs);
			return;
		}

		/**
		 * Для остальных браузеров периодически проверяем изменение размера текста.
		 */
		curHeight = el.height();
		setInterval(function() {
			var newHeight = el.height();

			if (newHeight != curHeight) {
				curHeight = newHeight;
				callFuncs();
			}
		}, interval);
		$(window).resize(callFuncs);
	}

	function callFuncs() {
		for(var i = 0; i < callbacks.length; i++) {
			callbacks[i]();
		}
	}

	return {
		/**
		 * Ручная инициализация события изменения размеров элементов на странице.
		 */
		resize: callFuncs,

		/**
		 * Добавляет обработчик события.
		 * @param {Function} func Ссылка на функцию, которую нужно выполнить.
		 */
		bind: function(func) {
			if (!el) {
				isInit = true;
				isDocReady && initBlock();
			}

			callbacks.push(func);
		},

		/**
		 * Удаляет обработчик события.
		 */
		unbind: function(func) {
			for(var i = 0; i < callbacks.length; i++) {
				callbacks[i] == func && callbacks.splice(i, 1);
			}
		}
	};
}();

/**
 * Эмулирует поведение <input type="search" />, как в Webkit.
 * @version 1.0
 */
$c.webkitPlaceholder = function() {

	if ($c.browser.webkit) return { bind: $.noop };

	$(function() {
		$('input[placeholder]').each(function () {
			bind(this);
		});
	});

	/**
	 * Добавляет функцию плейсхолдера элементу.
	 * @param {String|Array[Element]|Element|jQuery} els Поля ввода
	 * @param {String} [class_empty = 'empty'] Класс для пустого поля ввода
	 */
	function bind(els, classEmpty) {
		els = $(els);
		classEmpty = ('string' === typeof classEmpty) ? classEmpty : 'empty';

		els.focus(function () {
			if (this.value === $(this).attr('placeholder')) {
				this.value = '';
			}

			$(this).removeClass(classEmpty);
		});

		els.blur(function () {
			if (!this.value.length) {
				this.value = $(this).attr('placeholder');
				$(this).addClass(classEmpty);
			}
		});

		els.each(function() {
			$(this).val().length || $(this).blur();
		});
	}

	return {
		/**
		 * Вручную добавляет функцию плейсхолдера элементу.
		 * @param {String|Array[Element]|Element|jQuery} elem Поле ввода.
		 * @param {String} [class_empty] Класс для пустого поля ввода.
		 */
		bind: bind
	};
}();


/**
 * Метки как плейсхолдеры.
 *
 * @author Sergey Chikuyonok (serge.che@gmail.com), Vlad Yakovlev (red.scorpix@gmail.com)
 * @version 0.1.2
 * @date 2009-08-12
 *
 * @changelog
 * Version 0.1.2
 * Переименованы функции в <code>bind</code> и <code>unbind</code>.
 *
 * @changelog
 * Version 0.1.1
 * Теперь можно добавлять и удалять плейсхолдеры, но только после загрузки документа.
 */
$c.labelPlaceholder = function() {
	var dataKey = 'labelPlaceholder';
	var fieldsKey = 'bindedFields';

	/**
	 * Инициализирует поля формы, для которых есть заполнитель (placeholder).
	 */
	$(function() {
		$('label.placeholder').each(function(){
			linkPlaceholderWithField(this, '#' + $(this).attr('for'));
		});
	});

	/**
	 * Связывает вместе подпись-заполнитель и поле, к которому она относится.
	 * @param {String|Array[Element]|Element|jQuery} label Подпись-заполнитель
	 * @param {String|Array[Element]|Element|jQuery} input Поле
	 */
	function linkPlaceholderWithField(label, field) {
		label = $(label);
		field = $(field);

		/** @type {Array} */
		var bindedFields = label.data(fieldsKey);

		if (!bindedFields) {
			bindedFields = [];
			label
				.data(fieldsKey, bindedFields)
				.click(focusOnField);
		}

		bindedFields.push(field[0]);
		field.data(dataKey, label)
			.bind('focus blur', placeholderSwitcher)
			.blur();
	}

	/**
	 * Ставит фокус на поле, к которому привязан текущая подпись-заполнитель.
	 * Полезно использовать в случаях, когда один заполнитель привязан
	 * к нескольким полям.
	 * @param {Event} evt
	 */
	function focusOnField(evt) {
		var bindedFields = $(this).data(fieldsKey);

		if (bindedFields) {
			$(bindedFields).filter(':visible:first').focus();
			evt.preventDefault();
		}
	}

	/**
	 * Функция, отвечающая за переключение отображения заполнителя.
	 * Срабатывает автоматически при фокусе/блюре с элемента ввода.
	 * @param {Event} evt
	 */
	function placeholderSwitcher(evt) {
		var
			input = $(this),
			label = input.data(dataKey);

		!$.trim(input.val()) && 'blur' == evt.type ? label.show() : label.hide();
	}

	function bind(label) {
		linkPlaceholderWithField(label, '#' + $(label).attr('for'));
	}

	function unbind(label) {
		label = $(label);
		var field = $('#' + label.attr('for'));

		label
			.data(fieldsKey, '')
			.unbind('click', focusOnField);
		field
			.data(dataKey, '')
			.unbind('focus blur', placeholderSwitcher);
	}

	return {

		/**
		 * Добавляет обработчик.
		 * @param {String|Element|Array[Element]|jQuery} label Элемент метки.
		 */
		bind: bind,

		/**
		 * Удаляет обработчики у элементов.
		 * @param {String|Element|Array[Element]|jQuery} label Элемент метки, у которого нужно удалить обработчик.
		 */
		unbind: unbind
	};
}();


/**
 * Попапы-блоки внутри окна браузера.
 *
 * @param {String|Element|jQuery} Контейнер попапа.
 * @param {Object} options Настройки:
 * @option {String|Element|jQuery} fader Блок тени.
 * @option {String|Element|Array[Element]|jQuery} link Блоки для показа/скрытия попапа.
 * @option {String|Element|Array[Element]|jQuery} close Блоки для закрытия попапа.
 * @option {Function} beforeShow Функция, выполняемая перед открытием.
 * @option {Function} afterShow Функция, выполняемая после открытия.
 * @option {Function} beforeHide Функция, выполняемая перед закрытием.
 * @option {Function} afterHide Функция, выполняемая после закрытия.
 * @option {Boolean|Function} show = true Флаг анимации показа попапа, своя функция (тогда <code>afterShow</code> не выполняется) или без эффектов (false).
 * @option {Boolean|Function} hide = false Флаг анимации скрытия попапа, своя функция (тогда <code>afterHide</code> не выполняется) или без эффектов (false).
 * @option {Boolean} escapeKey = true Закрывать ли попап при нажатии клавиши Esc.
 *
 * @return {Object} Функции:
 * <ul>
 *   <li>hide</li>
 *   <li>cancel</li>
 *   <li>show</li>
 *   <li>toggle</li>
 * </ul>
 *
 * @author Stepan Reznikov [stepan.reznikov@gmail.com], Vladislav Yakovlev [red.scorpix@gmail.com]
 * @version 2.1.6
 * @date 2010-02-15
 *
 * @changelog
 * Version 2.1.6
 * Добавлены новые опции: <code>show</code>, <code>hide</code>, <code>escapeKey</code>.
 * Исправлена ошибка, когда закрывался попап при нажатии правой кнопки мыши.
 *
 * @changelog
 * Version 2.1.5
 * Исправлена ошибки, по которой были проблемы с множественным созданием попапов.
 * Оптимизирован код.
 * Обязательная опция блока вынесена в отдельный параметр <code>container</code>.
 *
 * @changelog
 * Version 2.1.4
 * Оптимизирован код.
 *
 * @changelog
 * Version 2.1.3
 * Добавлены комментарии.</li>
 * Параметр <code>showFunction</code> удален.</li>
 * Добавлены параметры <code>beforeShow</code>, <code>afterShow</code>, <code>beforeHide</code>, <code>afterHide</code>.</li>
 *
 * @changelog
 * Version 2.1
 * Флаг <code>keep</code> заменен на <code>event.stopPropagation().</code>
 * Форма появляется и исчезает плавно (под IE появляется/исчезает мгновенно в виду проблем с <code>filter</code>).
 * Добавлен параметр <code>showFunction</code> - функция, выполняемая после показа popup'а.
 */
$c.popupBlock = function(container, options) {

	container = $(container);
	options = $c.extend(options, {
		show: true,
		hide: false,
		escapeKey: true
	});

	container.mousedown(function(event) {
		event.stopPropagation();
	});

	if (options.fader) {
		options.fader = $(options.fader);
	}

	if (options.link) {
		options.link = $(options.link);
		options.link.mousedown(toggle);
	}

	if (options.close) {
		options.close = $(options.close);
		options.close.mousedown(toggle);
	}

	var
		documentClickHandler,
		documentKeyDownHandler;

	function cancel(event) {
		var code = event.keyCode ? event.keyCode : event.which ? event.which : null;

		if (27 === code) {
			hide(event);
		}
	}

	/**
	 * @param {Event} event
	 */
	function hide(event) {
		// Проверка на нажатие правой клавиши мыши.
		if (event && 3 === event.which && $(event.target).parents().filter(container).length) {
			return;
		}

		$(document)
			.unbind('mousedown', documentClickHandler)
			.unbind('keydown', documentKeyDownHandler);

		if (options.beforeHide) {
			options.beforeHide(event);
		}
		if (options.fader) {
			options.fader.addClass('hidden');
		}

		if (!options.hide || (true === options.hide && $c.browser.msie)) {
			container.addClass('hidden');

			if (options.afterHide) {
				options.afterHide(event);
			}
		} else if (true === options.hide) {
			container
				.css('opacity', 1)
				.animate({ opacity: 0 }, {
					duration: 300,
					complete: function() {
						container.addClass('hidden').css('opacity', '');

						if (options.afterHide) {
							options.afterHide(event);
						}
					}
				});
		} else {
			options.hide();
		}

		return false;
	}

	function show(event) {
		documentClickHandler = hide;
		documentKeyDownHandler = options.escapeKey ? cancel : $.noop;

		$(document)
			.mousedown(documentClickHandler)
			.keydown(documentKeyDownHandler);

		if (options.beforeShow) {
			options.beforeShow(event);
		}
		if (options.fader) {
			options.fader.removeClass('hidden');
		}

		if (!options.show || (true === options.show && $c.browser.msie)) {
			container.removeClass('hidden');

			if (options.afterShow) {
				options.afterShow(event);
			}
		} else if (true === options.show) {
			container.css('opacity', 0)
				.removeClass('hidden')
				.animate({ opacity: 1 }, {
					duration: 300,
					complete: function() {
						container.css('opacity', '');

						if (options.afterShow) {
							options.afterShow(event);
						}
					}
				});
		} else {
			options.show();
		}

		return false;
	}

	function toggle(event) {
		return container.hasClass('hidden') ? show(event) : hide(event);
	}

	return {

		/**
		 * Вызывает событие скрытия попапа.
		 * @param {Event} [event]
		 */
		hide: hide,

		/**
		 * Вызывает событие показа попапа.
		 * @param {Event} [event]
		 */
		show: show,

		/**
		 * Вызывает событие переключения состояния попапа.
		 * @param {Event} [event]
		 */
		toggle: toggle
	};
};


/**
 * Диспетчер любых событий.
 * @author Matthew Foster, Vlad Yakovlev (red.scorpix@gmail.com)
 * @version 1.0.1
 * @date 2009-09-01
 *
 * @changelog
 * Version 1.0.1
 * Теперь возвращает объект. Можно делать несколько объектов-диспетчеров.
 */
$c.eventDispatcher = function() {

	function EventDispatcher() {
		var listenerChain = {};
		var onlyOnceChain = {};

		/**
		 * Добавляет слушателя события.
		 * @param {String|Array} type Название события или событий через пробел.
		 * @param {Function} listener Слушатель.
		 * @param {Boolean} onlyOnce Подписаться на событие только один раз.
		 */
		function bind(type, listener, onlyOnce) {
			if (!listener instanceof Function) {
				throw new Error("Listener isn't a function");
			}

			var chain = onlyOnce ? onlyOnceChain : listenerChain;

			type = 'string' == typeof(type) ? type.split(' ') : type;

			for (var i = 0; i < type.length; i++) {
				if(!chain[type[i]]) {
					chain[type[i]] = [listener];
				} else {
					chain[type[i]].push(listener);
				}
			}
		}

		/**
		 * Проверяет, есть ли у такого события слушатели.
		 * @param {String} type Название события.
		 * @return {Boolean}
		 */
		function hasBinds(type) {
			return ('undefined' != typeof listenerChain[type] || 'undefined' != typeof onlyOnceChain[type]);
		}

		/**
		 * Удаляет слушателя события.
		 * @param {String} type Название события.
		 * @param {Function} listener Слушатель, который нужно удалить.
		 */
		function unbind(type, listener) {
			if (!hasBinds(type)) return false;

			$.each([listenerChain, onlyOnceChain], function(i) {
				/** @type {Array} */
				var lst = this[type];

				$.each(lst, function(j) {
					this == listener && lst.splice(j, 1);
				});
			});

			return true;
		}

		/**
		 * Инициирует событие.
		 * @param {String} type Название события.
		 * @param {Object} [args] Дополнительные данные, которые нужно передать слушателю.
		 * @return {Boolean}
		 */
		function dispatch(type, args) {

			if (!hasBinds(type)) return false;

			var
				chains = [listenerChain, onlyOnceChain],
				evt = new CustomEvent(type, this, args);

			for (var j = 0; j < chains.length; j++) {
				/** @type {Array} */
				var lst = chains[j][type];

				if (lst) {
					for(var i = 0, il = lst.length; i < il; i++) {
						lst[i](evt);
					}
				}
			}

			if (onlyOnceChain[type]) {
				delete onlyOnceChain[type];
			}

			return true;
		}

		return {
			/**
			 * Добавляет слушателя события.
			 * @param {String|Array} type Название события или событий через пробел.
			 * @param {Function} listener Слушатель.
			 * @param {Boolean} onlyOnce Подписаться на событие только один раз.
			 */
			bind: bind,

			/**
			 * Проверяет, есть ли у такого события слушатели.
			 * @param {String} type Название события.
			 * @return {Boolean}
			 */
			hasBinds: hasBinds,

			/**
			 * Удаляет слушателя события.
			 * @param {String} type Название события.
			 * @param {Function} listener Слушатель, который нужно удалить.
			 */
			unbind: unbind,

			/**
			 * Инициирует событие.
			 * @param {String} type Название события.
			 * @param {Object} [args] Дополнительные данные, которые нужно передать слушателю.
			 * @return {Boolean}
			 */
			dispatch: dispatch
		};
	}

	/**
	 * Основа события.
	 * @param {String} type Тип события.
	 * @param {Object} target Объект, которые инициировал событие.
	 * @param {Object} [data] Дополнительные данные.
	 */
	function CustomEvent(type, target, data) {
		this.type = type;
		this.target = target;

		if (data) {
			this.data = data;
		}
	}

	return function() {
		return new EventDispatcher();
	}
}();




/**
 * SVG Package
 */
(function() {
	var xlinkAttrs = ['actuate', 'arcrole', 'href', 'role', 'show', 'title', 'type'];
	var xmlAttrs = ['base', 'lang', 'space'];
	var attrNames = {
		accentHeight: 'accent-height', alignmentBaseline: 'alignment-baseline', arabicForm: 'arabic-form',
		baselineShift: 'baseline-shift',
		capHeight: 'cap-height', clipPath: 'clip-path', clipRule: 'clip-rule', colorInterpolation: 'color-interpolation', colorInterpolationFilters: 'color-interpolation-filters', colorProfile: 'color-profile', colorRendering: 'color-rendering',
		dominantBaseline: 'dominant-baseline',
		enableBackground: 'enable-background',
		fillOpacity: 'fill-opacity', fillRule: 'fill-rule', floodColor: 'flood-color', floodOpacity: 'flood-opacity', fontFamily: 'font-family', fontSize: 'font-size', fontSizeAdjust: 'font-size-adjust', fontStretch: 'font-stretch', fontStyle: 'font-style', fontVariant: 'font-variant', fontWeight: 'font-weight',
		glyphName: 'glyph-name', glyphOrientationHorizontal: 'glyph-orientation-horizontal', glyphOrientationVertical: 'glyph-orientation-vertical',
		horizAdvX: 'horiz-adv-x', horizOriginX: 'horiz-origin-x', horizOriginY: 'horiz-origin-y',
		imageRendering: 'image-rendering',
		letterSpacing: 'letter-spacing', lightingColor: 'lighting-color',
		markerEnd: 'marker-end', markerMid: 'marker-mid', markerStart: 'marker-start',
		overlinePosition: 'overline-position', overlineThickness: 'overline-thickness',
		panose1: 'panose-1', pointerEvents: 'pointer-events',
		renderingIntent: 'rendering-intent',
		shapeRendering: 'shape-rendering', stopColor: 'stop-color', stopOpacity: 'stop-opacity', strikethroughPosition: 'strikethrough-position', strikethroughThickness: 'strikethrough-thickness', strokeDashArray: 'stroke-dasharray', strokeDasharray: 'stroke-dasharray', strokeDashoffset: 'stroke-dashoffset', strokeDashOffset: 'stroke-dashoffset', strokeLineCap: 'stroke-linecap', strokeLinecap: 'stroke-linecap', strokeLinejoin: 'stroke-linejoin', strokeLineJoin: 'stroke-linejoin', strokeMiterlimit: 'stroke-miterlimit', strokeMiterLimit: 'stroke-miterlimit', strokeOpacity: 'stroke-opacity', strokeWidth: 'stroke-width',
		textAnchor: 'text-anchor', textDecoration: 'text-decoration', textRendering: 'text-rendering',
		underlinePosition: 'underline-position', underlineThickness: 'underline-thickness', unicodeBidi: 'unicode-bidi', unicodeRange: 'unicode-range', unitsPerEm: 'units-per-em',
		vAlphabetic: 'v-alphabetic', vHanging: 'v-hanging', vIdeographic: 'v-ideographic', vMathematical: 'v-mathematical', vertAdvY: 'vert-adv-y', vertOriginX: 'vert-origin-x', vertOriginY: 'vert-origin-y',
		wordSpacing: 'word-spacing', writingMode: 'writing-mode',
		xHeight: 'x-height'
	};
	var	exclude = /z-?index|font-?weight|opacity|zoom|line-?height/i;

	function getAttrName(name) {
		if (attrNames[name]) {
			name = attrNames[name];
		}

		if (-1 < $.inArray(name, xlinkAttrs)) {
			return [$c.ns.xlink, name];
		} else if (-1 < $.inArray(name, xmlAttrs)) {
			return [$c.ns.xml, name];
		} else {
			return [null, name];
		}
	}

	function attr(el, name, value) {
		if ('string' == typeof name && undefined !== value) {
			var attrName = getAttrName(name);
			el.setAttributeNS(attrName[0], attrName[1], value.valueOf());
		} else if ('string' == typeof name && undefined === value) {
			var attrName = getAttrName(name);
			return el.getAttributeNS(attrName[0], attrName[1]);
		} else {
			$.each(name, function(prop) {
				var attrName = getAttrName(prop);
				el.setAttributeNS(attrName[0], attrName[1], this);
			});
		}
	}

	function removeAttr(el, name) {
		var attrName = getAttrName(name);
		el.removeAttributeNS(attrName[0], attrName[1]);
	}

	function getStyleName(style) {
		return style.replace(/-([a-z])/ig, function(all, letter){
			return letter.toUpperCase();
		})
	}

	/**
	 * Из строки делает SVG-элемент.
	 * @param {String} data
	 */
	function loadSvg(data) {
		data = $.trim(data);

		var index = data.indexOf(' ');

		if (-1 < index) {
			var namespaces = '';

			$.each($c.ns, function(name) {
				if ('xml' != name && -1 == data.indexOf(this)) {
					namespaces += ' xmlns' + ('svg' == name ? '' : ':' + name) + '="' + this + '"';
				}
			});

			if (namespaces) {
				data = data.substr(0, index) + namespaces + data.substr(index);
			}
		}

		var
			xmlData = new DOMParser().parseFromString(data, 'text/xml'),
			svgEl = document.createElementNS($c.ns.svg, 'svg'),
			attrs = { version: '1.1' };

		for (var i = 0; i < xmlData.documentElement.attributes.length; i++) {
			var xmlAttr = xmlData.documentElement.attributes.item(i);

			if (!('version' == xmlAttr.nodeName || 'xmlns' == xmlAttr.nodeName.substring(0, 5))) {
				attrs[xmlAttr.nodeName] = xmlAttr.nodeValue;
			}
		}

		attr(svgEl, attrs);

		$.each(xmlData.documentElement.childNodes, function() {
			svgEl.appendChild(this.cloneNode(true));
		});

		return svgEl;
	}

	/**
	 * Неймспейсы для SVG.
	 */
	$c.ns = {
		/* SVG namespace. */
		svg: 'http://www.w3.org/2000/svg',
		/* XLink namespace. */
		xlink: 'http://www.w3.org/1999/xlink',
		/* XML Events namespace. */
		ev: 'http://www.w3.org/2001/xml-events',
		/* XML namespace. */
		'xml': 'http://www.w3.org/XML/1998/namespace'
	};

	$.fn.extend({
		/**
		 * Устанавливает или возвращает атрибут SVG-элемента.
		 * @param {String|Object} name Название атрибута или объект названий-значений.
		 * @param {String|Number} [value] Значение атрибута.
		 * @return {String} Если getter, то значение атрибута.
		 */
		svgAttr: function(name, value) {
			if (!document.createElementNS) {
				return this.attr(name, value);
			}

			if ('string' == typeof name && undefined === value) {
				return this.length ? attr(this[0], name) : undefined;
			}

			this.each(function() {
				attr(this, name, value);
			});

			return this;
		},


		/**
		 * Работа со стилями SVG-элементов.
		 * @param {String|Object} name Название стиля или объект названий-значений.
		 * @param {String|Number} [value] Значение атрибута
		 * @return {String} Если getter, то значение атрибута.
		 */
		svgCss: function(name, value) {
			if (!document.createElementNS) {
				return this.css(name, value);
			}

			if ('string' == typeof name && undefined === value) {
				return this.length ? window.getComputedStyle(this[0], null).getPropertyValue(name) : undefined;
			}

			var styles = {};

			if ('string' == typeof name) {
				styles[name] = value;
			} else {
				styles = name;
			}

			this.each(function() {
				for (var index in styles) {
					this.style[getStyleName(index)] = 'number' === typeof styles[index] && !exclude.test(styles[index]) ? styles[index] + 'px' : styles[index];
				}
			});

			return this;
		},


		/**
		 * Удаляет атрибут у SVG-элементов.
		 * @param {String} name
		 */
		svgRemoveAttr: function(name) {
			if (document.createElementNS) {
				this.each(function() {
					removeAttr(this, name);
				});

				return this;
			}

			return this.removeAttr(name);
		}
	});


	/**
	 * Создает SVG-элемент и возвращает его в обертке jQuery.
	 * @param {String|Element} selector Название элемента, строка XML или элемент.
	 * @return {jQuery}
	 */
	$c.svg = function(selector) {

		if ('string' == typeof selector) {
			if ('<' == selector.substr(0, 1)) {
				// Входной параметр — строка XML.
				selector = loadSvg(selector);
			} else {
				// Входной параметр — название SVG-элемента.
				var name = selector;
				selector = document.createElementNS($c.ns.svg, selector);
				'svg' == name && attr(selector, 'version', '1.1');
			}
		}

		return $(selector);
	}
})();


/**
 * Преобразует HEX-представление цвета в RGB.
 * @param {String} hex
 * @return {Array}
 */
$c.hex2Rgb = function(hex) {
	if ('#' == hex.substr(0, 1)) {
		hex = hex.substr(1);
	}
	if (3 == hex.length) {
		hex = hex.substr(0, 1) + hex.substr(0, 1) + hex.substr(1, 1) + hex.substr(1, 1) + hex.substr(2, 1) + hex.substr(2, 1);
	}

	return [parseInt(hex.substr(0, 2), 16), parseInt(hex.substr(2, 2), 16), parseInt(hex.substr(4, 2), 16)];
};

/**
 * Преобразует RGB-представление цвета в HEX.
 * @param {Array} rgb
 * @return {String}
 */
$c.rgb2Hex = function(rgb) {
	var s = '0123456789abcdef';

	return '#' + s.charAt(parseInt(rgb[0] / 16)) + s.charAt(rgb[0] % 16) + s.charAt(parseInt(rgb[1] / 16)) +
		s.charAt(rgb[1] % 16) + s.charAt(parseInt(rgb[2] / 16)) + s.charAt(rgb[2] % 16);
};


/**
 * Drag and Drop
 *
 * @param {String|Element|jQuery} el
 * @param {Function} start Функция, вызываемая при старте. Имеет параметр — объект Event.
 * @param {Function} drag Функция, вызываемся при перемещении. Имеет параметр — объект jQuery.Event
 *                        (<code>data</code> содержит startX, startY,
 *                        а также moveX, moveY — перемещение с начала драг-н-дропа).
 * @param {Function} stop Функция, вызываемая по окончании перемещения.
 *
 * @version 0.1.1
 * @date 2010-02-16
 */
$c.draggable = function(el) {
	el = $(el).first();

	var
		isDrag = false,
		isBind = false,
		startX,
		startY,
		that = {},
		startFunc,
		dropFunc,
		endFunc;

	bind();

	function bind(start, drop, end) {
		if (!el.length) return;

		if (isBind) {
			unbind();
		}

		isBind = true;

		startFunc = start;
		dropFunc = drop;
		endFunc = end;

		el.mousedown(startDnd);
	}

	function startDnd(evt) {
		if (!(el.length && isBind && !isDrag)) return;

		isDrag = true;
		startX = parseInt(evt.pageX);
		startY = parseInt(evt.pageY);

		$(document).mousemove(dnd).mouseup(endDnd);

		return startFunc ? startFunc(evt) : false;
	}

	function dnd(evt) {
		if (!el.length) return;

		return dropFunc ? dropFunc(evt, {
			startX: startX,
			startY: startY,
			moveX: parseInt(evt.pageX) - startX,
			moveY: parseInt(evt.pageY) - startY
		}) : false;
	}

	function endDnd(evt) {
		if (!(el.length && isBind && isDrag)) return;

		isDrag = false;
		$(document).unbind('mousemove', dnd).unbind('mouseup', endDnd);

		return endFunc ? endFunc(evt, {
			startX: startX,
			startY: startY,
			moveX: parseInt(evt.pageX) - startX,
			moveY: parseInt(evt.pageY) - startY
		}) : false;
	}

	/**
	 * Прекращает отслеживание драг-н-дропа.
	 */
	function unbind() {
		if (!(el.length && isBind)) return;

		endDnd();

		startFunc = null;
		dropFunc = null;
		endFunc = null;
		isBind = false;
		el.unbind('mousedown', startDnd);
	}

	that.bind = function(start, drop, end) {
		bind(start, drop, end);
		return that;
	};

	that.unbind = function() {
		unbind();
		return that;
	};

	/**
	 * Принудительно завершает драг-н-дроп.
	 */
	that.release = function(evt) {
		endDnd(evt);
		return that;
	};

	that.start = function(evt) {
		startDnd(evt);
		return that;
	};

	return that;
};