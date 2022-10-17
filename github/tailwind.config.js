/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1280px" },
      lg: { max: "1011px" },
      md: { max: "767px" },
      sm: { max: "543.9px" },
    },
  },
  plugins: [],
};
