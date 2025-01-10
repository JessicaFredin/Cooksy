/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				white: "#fafafa",
				whiteFull: "#ffffff",
				black: "#333333",
				gray: {
					100: "#eeeeee",
					200: "#D9D9D9",
					300: "#555555",
					400: "rgba(51, 51, 51, 40)",
					500: "#B8B8B8",
					600: "rgba(51, 51, 51, 60)",
					700: "rgba(51, 51, 51, 70)",
					800: "rgba(51, 51, 51, 80)",
				},
				pink: {
					100: "#FFE0EA",
					200: "#E12F6B",
					300: "#E12F6B",
					400: "#E12F6B",
					500: "#E12F6B",
					600: "#B12453",
					700: "#E12F6B",
					800: "#E12F6B",
				},
				red: {
					100: "#FFE0EA",
					200: "#E12F6B",
					300: "#E12F6B",
					400: "#E12F6B",
					500: "#E12F6B",
					600: "#E12F6B",
					700: "#E12F6B",
					800: "#E12F6B",
				},
				green: {
					100: "#D3E980",
					200: "#EDF5CA", 
					300: "#A8D400",
					400: "#A8D400",
					500: "#A8D400",
					600: "#A8D400",
					700: "#A8D400",
					800: "#A8D400",
				},
				blue: {
					100: "#DEE9FF",
					200: "#78A7FF",
					300: "#78A7FF",
					400: "#78A7FF",
					500: "#78A7FF",
					600: "#78A7FF",
					700: "#78A7FF",
					800: "#78A7FF",
				},
			},
			fontFamily: {
				pacifico: ["Pacifico", "cursive"], // Add Pacifico as a custom font
			},
		},
	},
	plugins: [],
};
