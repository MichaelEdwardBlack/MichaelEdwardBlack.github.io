import { colors } from "tailwindcss/defaultTheme";

export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const darkMode = "class";
export const theme = {
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
        ...colors.yellow,
      },
      danger: {
        ...colors.red,
      },
    },
    backgroundImage: {
      business: "url('../public/images/Business-Background.jpg')",
    },
  },
};
export const variants = {
  extend: {
    transitionProperty: ["hover", "focus"],
    transitionDuration: ["hover", "focus"],
  },
};
export const plugins = [];
export const safelist = [
  {
    pattern: /(top|bottom|left|right)-*/,
    variants: ["before", "after"],
  },
  {
    pattern:
      /(bg|text|border)-(primary|secondary|warning|danger|green|blue|red|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    variants: ["hover"],
  },
];
