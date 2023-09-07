/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'old_standard':['Old Standard TT', 'serif'],
        'advent_pro': ['Advent Pro', 'sans-serif'],
        'belleza': ['Belleza', 'sans-serif'],
        'tenor_Sans': ['Tenor Sans', 'sans-serif'],
        'antic_didone': ['Antic Didone', 'serif']
       },
      colors: {
        base: {
          primary: '#F4EFEC',
          secondary: '#F0D9D1'
        },
      }
    },
  },
  plugins: [],
}

