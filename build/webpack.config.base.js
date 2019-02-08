// const { resolve } = require('./utils');
const webpack = require('webpack');

module.exports = {
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
	module: {
		rules: [
			// {
			// 	test: /\.js$/,
			// 	loader: 'babel-loader',
			// 	include: [resolve('src')],
			// },
			{
				test: /\.ts$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true, //HMR doesn't work without this
				},
			},
		],
	},
	plugins: [
		new webpack.BannerPlugin({
			banner: () => `${process.env.npm_package_name} v${process.env.npm_package_version}
Copyright (c) 2019 Bowen Zhao
Released under the MIT License.`,
		}),
	],
};
