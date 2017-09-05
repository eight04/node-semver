import commonjs from "rollup-plugin-commonjs";
// import nodeResolve from "rollup-plugin-node-resolve";

export default {
	input: "bundle.js",
	output: {
		file: "dist/semver.js",
		format: "iife"
	},
	name: 'semverCompare',
	plugins: [commonjs()]
};
