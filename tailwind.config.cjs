/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{tsx,ts,jsx,js}"],
	theme: {
		extend: {
			colors: {
				// Primary

				Moderate_blue: "hsl(238, 40%, 52%)",
				Soft_Red: "hsl(358, 79%, 66%)",
				Light_grayish_blue: "hsl(239, 57%, 85%)",
				Pale_red: "hsl(357, 100%, 86%)",

				// Neutral

				Dark_blue: "hsl(212, 24%, 26%)",
				Grayish_Blue: "hsl(211, 10%, 45%)",
				Light_gray: "hsl(223, 19%, 93%)",
				Very_light_gray: "hsl(228, 33%, 97%)",
				White: "hsl(0, 0%, 100%)",
			},
      fontFamily: {
        Rubik: ['Rubik', 'sans-serif']
      }
		},
	},
	plugins: [],
};
