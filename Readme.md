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
<script src="//unpkg.com/json-highlight"></script>
<!-- or -->
<script src="//cdn.jsdelivr.net/npm/json-highlight"></script>
```

## Usage
``` js
jsonHighlight({
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
// or
jsonHighlight(JSON.stringify(obj))
```

## Todos:
 - [ ] 可配置内联颜色
 - [ ] 可配置类名前缀
 - [ ] 全局配置
 - [ ] cli接口

## Particular Thanks

- [luyilin/json-format-highlight](https://github.com/luyilin/json-format-highlight)
