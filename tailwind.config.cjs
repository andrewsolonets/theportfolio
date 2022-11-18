/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FFFFFF",
        primary: {
          DEFAULT: "#9046CF",
          dark: "#893CCD",
          glass: "rgb(127 50 195 / <alpha-value>)",
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
      dropShadow: {
        header: "0px 2px 15px rgba(0, 0, 0, 0.15)",
        card: "0px 7px 20px 2px rgba(0, 0, 0, 0.11)",
        avatar: "0px 0px 31px 9px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        bgPattern: "url('/public/assets/bgPattern.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
