const { opacity } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5e9f9",
          100: "#f2e7fe",
          200: "#e4cffe",
          300: "#d7b7fd",
          400: "#c99ffd",
          500: "#bc87fc",
          600: "#966cca",
          700: "#715197",
          800: "#4b3665",
          900: "#261b32"
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
      },
      animation: {
        slideup: 'slideup 1.5s ease-out forwards',
        slidedown: 'slidedown 1.5s ease-out forwards',
        slideleft: 'slideleft 1.5s ease-out forwards',
        slideright: 'slideright 1.5s ease-out forwards',
      },
      keyframes: {
        slideup: {
          '0%': { 
            transform: 'translateY(50%)', 
            animationTimingFuntion: 'cubic-bezier(0.4, 0, 1, 1)',
            opacity: 0
          },
          '100%': {  
            transform: 'translateY(-50%)', 
            animationTimingFuntion: 'cubic-bezier(0.4, 0, 1, 1)',
            opacity: 1
          },
        },
        slidedown: {
          '0%': { 
            transform: 'translateY(-50%)', 
            animationTimingFuntion: 'cubic-bezier(0.4, 0, 1, 1)',
            opacity: 0
          },
          '100%': {  
            transform: 'translateY(50%)', 
            animationTimingFuntion: 'cubic-bezier(0.4, 0, 1, 1)',
            opacity: 1
          },
        },
        slideleft: {
          '0%': { 
            transform: 'translateX(50%)', 
            animationTimingFuntion: 'cubic-bezier(0.4, 0, 1, 1)',
            opacity: 0
          },
          '100%': {  
            transform: 'translateX(-50%)', 
            animationTimingFuntion: 'cubic-bezier(0.4, 0, 1, 1)',
            opacity: 1
          },
        },
        slideright: {
          '0%': { 
            transform: 'translateX(-50%)', 
            animationTimingFuntion: 'cubic-bezier(0.4, 0, 1, 1)',
            opacity: 0
          },
          '100%': {  
            transform: 'translateX(50%)', 
            animationTimingFuntion: 'cubic-bezier(0.4, 0, 1, 1)',
            opacity: 1
          },
        }
      }
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
      transitionDuration: ['hover', 'focus']
    }
  },
  plugins: [],
}
