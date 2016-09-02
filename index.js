module.exports = {
	register: function (handlebars) {
		handlebars.registerHelper('wrapWith', function (name, options) {
				if ('string' !== typeof name) {
					options = name;
					name = 'default';
				}

				var layout = options.data.root.__partials[name].parsed.content;
				var content = options.fn(this);
				var newContext = extend(options.data.root, {
					yield: content,
					options: options.hash
				});
				var template = handlebars.compile(layout, {preventIndent: true});

				return template(newContext);
			}
		);
	}
};

/**
 * Extend object with another object by using a copy.
 *
 * @param {Object} a - Object which will be copied and extended
 * @param {Object} n - Object which will be applied
 */
function extend(a, b) {
	var customContext = Object.assign({}, a);

	for (var key in b) {
		if (b.hasOwnProperty(key)) {
			customContext[key] = b[key];
		}
	}

	return customContext;
}