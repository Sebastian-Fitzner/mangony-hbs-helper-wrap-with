module.exports = {
	register: function (handlebars) {
		handlebars.registerHelper('wrapWith', function (name, options) {
				if ('string' !== typeof name) {
					options = name;
					name = 'default';
				}

				var layout = options.data.root.__partials[name].parsed.content;
				var content = options.fn(this);
				var template = handlebars.compile(layout);

				this.options = options.hash;
				this.yield = content;
				return template(this);
			}
		);
	}
};