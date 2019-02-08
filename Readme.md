# json-highlight
[![NPM version](https://img.shields.io/npm/v/json-highlight.svg)](https://npmjs.org/package/json-highlight)
> A Json to Html formatter, [Live Demo](https://bowencool.github.io/json-highlight/)

## Install
 - using npm
``` bash
npm i json-highlight
```
 - using in browser
``` html
<script scr="//unpkg.com/json-highlight@latest"></script>
<!-- or -->
<script scr="//cdn.jsdelivr.net/npm/json-highlight@latest"></script>
```

## Usage
``` js
document.querySelector('pre').innerHTML = jsonHighlight({
	number: 123,
	string: 'hello',
	array: [
		2e60,
		-0.2,
		null,
		true,
		{
			nesting: [],
		},
	],
});
```

## Todos:
 - [ ] 可配置内联样式
 - [ ] 全局配置

## Particular Thanks

- [luyilin/json-format-highlight](https://github.com/luyilin/json-format-highlight)
