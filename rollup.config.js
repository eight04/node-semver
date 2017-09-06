import uglify from 'rollup-plugin-uglify';
import re from 'rollup-plugin-re';
import commonjs from 'rollup-plugin-commonjs';

export default {
	input: 'bundle.js',
	output: {
		file: 'dist/semver.js',
		format: 'iife'
	},
	name: 'semverCompare',
	plugins: [re({
		patterns: [{
			test: /(\w+) = exports\.(\w+)( =.*)/g,
			replace: '$1$3\nexports.$2 = $1;'
		}, {
			test: /exports\.(\w+\()/g,
			replace: '$1'
		}, {
			test: /exports = module\.exports.*/g,
			replace: ''
		}, {
			test: /debug\(.+?\);/g,
			replace: ''
		}, {
			test: /^\s*(\/\* nomin \*\/).+/gm,
			replace: ''
		}]
	}), commonjs(), uglify()]
};
