import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#292D32",
				secondary: "#BBF247",
				text: "#757575",
				accent: "#4B4F53",
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				bebas: ['Bebas Neue', 'sans-serif'],
			},
		},
	},
	plugins: [],
};

export default config;