<h1 align="center">
<img width="400px" src="http://www.veams.org/downloads/logo.svg" alt="Logo Mangony" /><br>
Mangony Handlebars Helper - wrapWith
</h1>

This helper gives you the possibility to construct a general template snippet (`{{#wrapWith}}`) which can be used as enclosing markup in your pages and/or partials. This helper is very useful when you have to build complex grid systems with repetitive code.

### Installation

Install `mangony-hbs-helper-wrap-with` with 

``` bash
npm install mangony-hbs-helper-wrap-with --save-dev
```

### Usage

Helper is generated by passing in an instance of Handlebars.

### `helper.register(handlebars) : Object`

- `handlebars` `Handlebars` - An instance of Handlebars.

```js
var handlebars = require('handlebars');
var mgyHelperWrapWith = require('mangony-hbs-helper-wrap-with');

helper.register(handlebars);
```

### Helper

#### `wrapWith` partial

```hbs
<section class="section{{#if options.classes}} {{options.classes}}{{/if}}">
   {{{yield}}}
</section>
```

`{{{yield}}}` will be replaced with the provided content.

#### Usage of `wrapWith`

```hbs
{{#wrapWith "section" classes="is-left"}}
   my custom content or 
   {{> my-partial}}
{{/wrapWith}}
```

### Mangony

**Mangony is yet another static site generator - fast, simple and powerful:** https://github.com/Sebastian-Fitzner/mangony

## License 

see [LICENSE.md](https://github.com/Sebastian-Fitzner/mangony-hbs-helpers/blob/master/LICENSE.md).