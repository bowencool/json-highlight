import json from '../src/index';

document.querySelector('pre').innerHTML = json({
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

if (module.hot) {
	module.hot.accept();
}
