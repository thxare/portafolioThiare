/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,astro}",
    "./src/components/**/*.{html,js,astro,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "barlow-semi": ["BarlowSemi", "sans-serif"],
        "barlow-semi-light": ["BarlowSemi-light", "sans-serif"],
        "barlow-semi-bold": ["BarlowSemi-bold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
