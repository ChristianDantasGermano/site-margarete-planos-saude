/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}" , 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        old_standard: ["Old Standard TT", "serif"],
        advent_pro: ["Advent Pro", "sans-serif"],
        belleza: ["Belleza", "sans-serif"],
        tenor_Sans: ["Tenor Sans", "sans-serif"],
        antic_didone: ["Antic Didone", "serif"],
      },
      colors: {
        base: {
          primary: "#F0DBDB",
          secondary: "#F5EBE0",
          tertiary: "#DBA39A",
          base: "#FEFCF3",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
