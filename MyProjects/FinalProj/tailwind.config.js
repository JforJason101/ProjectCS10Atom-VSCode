const plugin = require('tailwindcss/plugin')

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			textColor: [
        	'responsive',
        	'hover',
        	'focus',
        	'before',
        	'after',
        	// If you want to combine it with a pseudo class,
        	// use `<pseudo-class>_<pseudo-element>`.
        	'hover_before',
        	'hover_after',
        	'focus_before',
			'foo_bar',
			],
		},
		backgroundColor: (theme) => ({
			coolGREEN: "#c3ff00",
			black: "#000000"
		}),
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
