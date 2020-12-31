const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1e2fe",
          100: "#d7b8fd",
          200: "#bc87fc",
          300: "#9d54f2",
          400: "#842ae3",
          500: "#6900d3",
          600: "#5e00ce",
          700: "#4e00c5",
          800: "#3d00be",
          900: "#1b00b0"
        },
        secondary: {
          50: "#d4f6f2",
          100: "#92e9dc",
          200: "#03DAC5",
          300: "#00c7ab",
          400: "#00b798",
          500: "#00a885",
          600: "#009a77",
          700: "#008966",
          800: "#007957",
          900: "#005b39"
        },
        warning: {
          ...defaultTheme.colors.yellow
        },
        danger: {
          ...defaultTheme.colors.red
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
