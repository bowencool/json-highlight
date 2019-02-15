import tsPlugin from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const name = 'jsonHighlight';
const fileName = 'json-highlight';

const banner = `/*!
* ${process.env.npm_package_name} v${process.env.npm_package_version}
* Copyright (c) 2019 Bowen Zhao
* Released under the MIT License.
*/`;

export default [
	{
		input: 'src/index.ts',
		plugins: [tsPlugin()],
		output: [
			{
				format: 'umd',
				banner,
				name,
				file: `dist/${fileName}.js`,
			},
			{
				format: 'cjs',
				banner,
				name,
				file: `dist/${fileName}.common.js`,
			},
			{
				format: 'esm',
				banner,
				name,
				file: `dist/${fileName}.esm.js`,
			},
		],
	},
	{
		input: 'src/index.ts',
		plugins: [
			tsPlugin(),
			terser({
				output: {
					comments: /^!/,
				},
			}),
		],
		output: {
			format: 'umd',
			banner,
			name,
			file: `dist/${fileName}.min.js`,
		},
	},
];
