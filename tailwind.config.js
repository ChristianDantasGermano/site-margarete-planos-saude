/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'old_standard': ['Old Standard TT', 'serif']
       },
      colors: {
        base: {
          cyan: '#BAF1E4',
          red: '#F4908A'
        },
      }
    },
  },
  plugins: [],
}

