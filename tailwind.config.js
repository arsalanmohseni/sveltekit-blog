/** @type {import('tailwindcss').Config} */
import fluid, { extract } from 'fluid-tailwind'

export default {
    content: {
        files: ['./src/**/*.{html,js,svelte,ts}'],
        extract
    },

	theme: {
		extend: {}
	},

	plugins: [fluid]
};
