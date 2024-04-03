/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        QHD: "2560px",
        QHDPLUS: "3200px",
      },
      fontFamily: {
        belleza: ["Belleza"],
        glacialIndifference: ["GlacialIndifference", "sans-serif"],
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
};
