/* eslint-disable no-undef */
const { nextui } = require('@nextui-org/react');
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '320px', // => for extra small devices
			sm: '640px', // => for small devices
			md: '768px', // => for medium devices
			lg: '1024px', // => for large devices
			xl: '1280px', // => for extra large devices
			'2xl': '1536px', // => for 2xl devices
			'3xl': '1920px', // => for 3xl devices
		},
		colors: {
			primaryColor: '#07075d',
			secondaryColor: '#bf3f6f',
			lightSecondary: '#ea4447',
			white: '#fff',
			dark: '#3c3d3e',
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
