const fontSizes = {};
const minFontSize = 12;
const maxFontSize = 70;
const base = 16;
let i = minFontSize;
while (i <= maxFontSize) {
	fontSizes[i] = `${i / base}rem`;
	i += 2;
}

module.exports = {
	content: ["./src/**/*.{html,js,ts,tsx}"],
	theme: {
		fontSize: fontSizes,
		extend: {
			theme01: {
				"color-textLight-theme01": "#212427",
				"color-textDark-theme01": "#ffff",
				"color-light100-theme01": "#9595FF",
				"color-medium100-theme01": "#6A6AE3",
				"color-dark100-theme01": "#4747BC",
			},
		},
	},

	plugins: [require("tailwind-scrollbar")],
};
