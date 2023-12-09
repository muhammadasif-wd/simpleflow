import { nextui } from '@nextui-org/react';
/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			sm: '640px', // => for mobile device
			md: '768px', // => for tablet device
			lg: '1024px', // => for small laptop device
			xl: '1280px', // => for desktop device
			'2xl': '1536px', // => for big desktop device
		},
		colors: {
			primary: '#07085d',
			secondary: '#bf3f6f',
			lightSecondary: '#ea4447',
			dark: '#272829',
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
