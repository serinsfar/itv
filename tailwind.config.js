import { color } from 'framer-motion'
import { CgEnter } from 'react-icons/cg'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popping: ["Popping" , "sans-serif"],
      },
      colors: {
        primary: "#172E7A",
        secondary:   "#FF9400" /*"#69a79c"*//*"#172E7A"jaune*/,
        third: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2 : "#999999",
        black: "#000000",
      },
      container:{
        center: true,
        padding:{
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
}



