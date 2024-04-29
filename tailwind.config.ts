import type { Config } from "tailwindcss";
import { colors } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
          900: "#261b32",
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
          900: "#005b39",
        },
        warning: {
          //@ts-ignore
          ...colors?.orange,
        },
        danger: {
          //@ts-ignore
          ...colors?.red,
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
      transitionDuration: ["hover", "focus"],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(top|bottom|left|right)-*/,
      variants: ["before", "after"],
    },
    {
      pattern:
        /(bg|text|border)-(primary|secondary|warning|danger|green|blue|red|gray)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ["hover"],
    },
  ],
};
export default config;
