const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    `pages/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    // "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    extend: {
      colors: {
        // brand colors
        brandText: colors.gray[500],
        brandTextLight: colors.gray[50],
        brandTextDark: colors.gray[900],

        // 60% of page
        brandBg: colors.gray[100],
        brandBgLight: colors.gray[50],
        brandBgDark: colors.gray[900],

        // 30% of page
        brandPrimary: "#6356ec",
        brandPrimaryLight: colors.indigo[300],
        brandPrimaryDark: colors.indigo[600],

        // 10% of page
        brandAccent: "#FEA93B",
        brandAccentLight: colors.yellow[300],
        brandAccentDark: colors.yellow[500],
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        handwriting: ["var(--font-pacifico)"],
      },
    },
  },
};
