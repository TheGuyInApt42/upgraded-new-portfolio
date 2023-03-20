/** @type {import('tailwindcss').Config} */
const { spacing, fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
			backgroundColor: {
				accent: '#00B4D8',
				'true-blue': '#4062BB',
				'turquoise-accent': '#4BC6B9',
				'orange-accent': '#FFC243',
				'blue-green-accent': '#73C1C6',
			},
			colors: {
				'blue-opaque': 'rgb(13 42 148 / 18%)',
				'true-blue': '#4062BB',
				'turquoise-accent': '#4BC6B9',
				'orange-accent': '#FFC243',
			},
			fontFamily: {
				sans: ['Raleway', ...fontFamily.sans],
				display: ['Raleway', ...fontFamily.sans],
				body: ['Raleway', ...fontFamily.sans],
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.gray.700'),
						a: {
							color: theme('colors.blue.500'),
							'&:hover': {
								color: theme('colors.blue.700'),
							},
							code: { color: theme('colors.blue.400') },
						},
						'h2,h3,h4': {
							'scroll-margin-top': spacing[32],
						},
						code: { color: theme('colors.pink.500') },
						'blockquote p:first-of-type::before': false,
						'blockquote p:last-of-type::after': false,
					},
				},
				dark: {
					css: {
						color: theme('colors.gray.300'),
						a: {
							color: theme('colors.blue.400'),
							'&:hover': {
								color: theme('colors.blue.600'),
							},
							code: { color: theme('colors.blue.400') },
						},
						blockquote: {
							borderLeftColor: theme('colors.gray.700'),
							color: theme('colors.gray.300'),
						},
						'h2,h3,h4': {
							color: theme('colors.gray.100'),
							'scroll-margin-top': spacing[32],
						},
						hr: { borderColor: theme('colors.gray.700') },
						ol: {
							li: {
								'&:before': { color: theme('colors.gray.500') },
							},
						},
						ul: {
							li: {
								'&:before': { backgroundColor: theme('colors.gray.500') },
							},
						},
						strong: { color: theme('colors.gray.300') },
						thead: {
							color: theme('colors.gray.100'),
						},
						tbody: {
							tr: {
								borderBottomColor: theme('colors.gray.700'),
							},
						},
					},
				},
			}),
		},
  },
  variants: {
		typography: ['dark'],
		extend: {
			listStyleType: ['hover', 'focus'],
			listStylePosition: ['hover', 'focus'],
		},
	},
  plugins: [require('@tailwindcss/typography')],
}
