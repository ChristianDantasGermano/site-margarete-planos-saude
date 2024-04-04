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
        dancingScript: ["Dancing Script"],
      },
      colors: {
        base: {
          primary: "#f9d4ff",
          secondary: "#f9d4ff",
          tertiary: "#dfbcf6",
          base: "#f9d4ff",
        },
      },
    },
  },
};
