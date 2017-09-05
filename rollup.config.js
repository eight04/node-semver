import uglify from 'rollup-plugin-uglify';
import re from 'rollup-plugin-re';

export default {
	input: 'bundle.js',
	output: {
		file: 'dist/semver.js',
		format: 'iife'
	},
	name: 'semverCompare',
	plugins: [re({
		patterns: [{
			test: /debug\(.+?\);/g,
			replace: ''
		}, {
			test: /^\s*\/\* nomin \*\/.+/gm,
			replace: ''
		}]
	}), uglify()]
};
