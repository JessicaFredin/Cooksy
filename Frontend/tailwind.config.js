/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#fafafa",
				black: "#333333",
				gray: {
					100: "#D9D9D9",
					200: "#333",
					300: "#333",
					400: "#333",
					500: "#333",
					600: "#333",
					700: "#333",
					800: "#333",
				},
				pink: {
					100: "#E12F6B",
					200: "#E12F6B",
					300: "#E12F6B",
					400: "#E12F6B",
					500: "#E12F6B",
					600: "#E12F6B",
					700: "#E12F6B",
					800: "#E12F6B",
				},
				green: {
					100: "#A8D400",
					200: "#A8D400",
					300: "#A8D400",
					400: "#A8D400",
					500: "#A8D400",
					600: "#A8D400",
					700: "#A8D400",
					800: "#A8D400",
				},
			},
		},
	},
	plugins: [],
};
