This repository bundles node-semver to a single `semverCompare(a, b)` function. You can find the bundle at `dist/semver.js`.

Usage:
```js
semverCompare("0.1.0", "0.1.0"); // 0
semverCompare("0.1.1", "0.1.0"); // 1
semverCompare("0.0.1", "0.1.0"); // -1
```
