// @ts-check

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss", "@trivago/prettier-plugin-sort-imports"],
	printWidth: 120,
	tabWidth: 4,
	useTabs: true,
};
