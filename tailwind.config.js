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
          primary: "#c6a4ec",
          secondary: "#dfbcf6",
          tertiary: "#9273d9",
          base: "#f9d4ff",
        },
      },
    },
  },
};
