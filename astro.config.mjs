// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://bartoszkapciak.com",
	integrations: [tailwind()],
});
