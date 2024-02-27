/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			neutral: {
				8: '#FCFCFD',
				25: '#FCFDFE',
				300: '#ADBAC5',
				400: '#7C878E',
				500: '#5A6268',
				600: '#464F55',
				900: '#181B1F'
			},
			transparent: 'transparent'
		},
		fontSize: {
			'display-xs': ['1.5rem', '1.3'],
			'display-sm': ['1.875rem', '1.12'],
			'display-md': ['2.25rem', '1.22'],
			sm: ['0.875rem', '1.42'],
			md: ['1rem', '1.5']
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif']
		},
		extend: {
			strokeWidth: {
				1.5: '1.5px'
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(180deg, #9A77FF 0%, #735FFA 100%)'
			}
		}
	},
	plugins: []
};
