const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
	mode: 'production',
	entry: path.resolve(__dirname, '../src/index.ts'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'json-highlight.min.js',
		library: 'jsonHighlight',
		libraryExport: 'default',
		libraryTarget: 'umd',
	},
	stats: {
		modules: false,
	},
});
