/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xl: { max: "1600px" },
      Mobilexl: { min: "1440px" },
      lg: { max: "1011px" },
      Mobilelg: { min: "1011px" },
      md: { max: "767px" },
      Mobilemd: { min: "767px" },
      sm: { max: "543.9px" },
    },
  },
  plugins: [],
};
