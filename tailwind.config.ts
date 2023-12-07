import type { Config } from 'tailwindcss'
import twColor from 'tailwindcss/colors'

const colors = {
	transporent: twColor.transparent,
	black: twColor.black,
	white: twColor.white,
	primary: '#FF9902',
	secondary: '#161D25',
	'bg-color': '#F2F2F5',
	aqua: '#268697',
}

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors,
		extend: {
			// backgroundImage: {
			//   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			//   'gradient-conic':
			//     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			// },
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2.5xl': '1.725rem',
				'3.5xl': '2.155rem',
				'4.5xl': '2.58rem',
				'5.5xl': '3.45rem',
				'6.5xl': '4.3rem',
				'7.5xl': '5.17rem',
				'8.5xl': '6.9rem',
				'9.5xl': '9.2rem',
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: '0.2' },
					to: { opacity: '1' },
				},
				scalein: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: '0.3',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				opacity: 'anymationOpacity  .5s ease-in-out',
				scaleIn: 'scaleIn  .35s  ease-in-out',
			},
		},
	},
	plugins: [],
}
export default config
