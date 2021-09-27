const plugin = require('tailwindcss/plugin');

module.exports = {
	mode: 'jit',
	darkMode: 'media',
	purge: ['./src/**/*.{html,js,svelte,ts}', './safelist.txt'],
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.remove-blink': {
					'-webkit-tap-highlight-color': 'transparent'
				}
			};

			addUtilities(newUtilities, ['responsive', 'hover']);
		})
	],
	theme: {
		extend: {
			zIndex: { '-10': '-10' },
			minWidth: { 250: '250px' },
			gridTemplateColumns: {
				'grid-fit': 'repeat(auto-fit, minmax(150px, 1fr))'
			},
			colors: {
				'randstad-blue': '#2175d9',
				'randstad-green': '#6ba5b4'
			}
		}
	},

	variants: {
		backgroundColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
		textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
		fontSize: ['responsive', 'hover'],
		animation: ['hover', 'focus', 'active']
	}
};
