/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'soft-red': 'hsl(5, 85%, 63%)',
      'soft-orange': 'hsl(35, 77%, 62%)',
      'dark-grayish-blue': 'hsl(236, 13%, 42%)',
      'very-dark-blue': 'hsl(240, 100%, 5%)',
      'white':'rgb(255 255 255)',
      'black':'rgb(0 0 0)'
    },
    fontFamily:{
      'inter': ['Inter', 'sans-serif']
    },
  },
  plugins: [],
}