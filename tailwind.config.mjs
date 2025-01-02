/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				handwriting: ['Playpen Sans Variable', 'cursive'],
				voumy: ['Raleway Medium Alt1', 'Arial'],
				slogan: ['Comfortaa', 'Helvetica'],
			},
		
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
