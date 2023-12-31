/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
	  colors: {
		  'custom-black': '#1C1C1C',
		  'custom-ash': '#777',
		  'custom-white': '#F4F4f4',
		  'grad-start': '#FF8938',
		  'grad-stop': '#F00',
	  },
    extend: {},
  },
  plugins: [require('daisyui')],
}

