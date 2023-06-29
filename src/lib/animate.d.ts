// TODO fix while waiting for https://github.com/jamiebuilds/tailwindcss-animate/pull/36

declare module 'tailwindcss-animate' {
	import type { Plugin } from "tailwindcss";
	const plugin: Plugin<{}>;
	export default plugin;
}


