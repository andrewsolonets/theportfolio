/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#FFFFFF",
      primary: {
        DEFAULT: "#9046CF",
        dark: "#893CCD",
        glass: "rgb(127,50,195 / 71)",
      },
      secondary: {
        DEFAULT: "#FFD148",
      },
    },
    fontFamily: {
      sans: ["Inter", "sans-serif", ...defaultTheme.fontFamily.sans],
      section: ["Fjalla One", "sans-serif", ...defaultTheme.fontFamily.sans],
      heading: ["Quantico", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
