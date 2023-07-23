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
  variants: {
    extend: {
      fill: ["hover", "focus"], // esto activa las variantes de hover y focus para el relleno
    },
  },
  plugins: [
    require("tailwindcss-animated"),
    //require("@tailwindcss/ui"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".after:border-b-2": {
          content: '""',
          display: "block",
          borderTop: "2px solid",
        },
        ".after:absolute": {
          position: "absolute",
        },
        // Añade más utilidades personalizadas si es necesario.
      };
      addUtilities(newUtilities, ["after"]);
    },
  ],
};
