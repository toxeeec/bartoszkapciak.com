// @ts-check
/** @type {import("lint-staged").Config} */
export default {
	"*": "prettier --ignore-unknown --write",
	"*.{cjs,mjs,astro}": "eslint --fix",
};
