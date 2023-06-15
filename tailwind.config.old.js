const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'false'
  theme: {
    extend: {
      height: {
        "screen-dvh": "100dvh",
        "screen-lvh": "100lvh",
        "screen-svh": "100svh",
      },
      width: {
        "screen-dvw": "100dvw",
        "screen-lvw": "100lvw",
        "screen-svw": "100svw",
      },
      colors: {
        light: {
          primary: "#6356ec", // Purple
          secondary: "#FEA93B", // Yellow
          background: "#F7FAFC", // White
          text: "#2D3748", // Dark text for light mode
        },
        dark: {
          primary: colors.indigo[ 300 ], // Lighter purple for dark mode
          secondary: "#FEA93B", // Yellow remains the same
          background: "#2D3748", // Dark background for dark mode
          text: "#F7FAFC", // Light text for dark mode
        },
        // brand colors
        brandText: colors.gray[ 500 ],
        brandTextLight: colors.gray[ 50 ],
        brandTextDark: colors.gray[ 900 ],

        // 60% of page
        brandBg: colors.gray[ 100 ],
        brandBgLight: colors.gray[ 50 ],
        brandBgDark: colors.gray[ 900 ],

        // 30% of page
        brandPrimary: "#6356ec",
        brandPrimaryLight: colors.indigo[ 300 ],
        brandPrimaryDark: colors.indigo[ 600 ],

        // 10% of page
        brandAccent: "#FEA93B",
        brandAccentLight: colors.yellow[ 300 ],
        brandAccentDark: colors.yellow[ 500 ],
      },
      fontFamily: {
        sans: [ "var(--font-outfit)" ],
        handwriting: [ "var(--font-caveat)" ],
      },
    },
    gridTemplateRows: {
      pancake: "auto 1fr auto",
      "header-and-main": "auto 1fr",
      "main-and-footer": "1fr auto",
    },
  },
  variants: {
    extend: {
      backgroundColor: [ "dark" ],
      textColor: [ "dark" ],
    },
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    require("@tailwindcss/typography"),
    function ({ addVariant }) {
      addVariant(
        "supports-backdrop-blur",
        "@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"
      );
      addVariant(
        "supports-scrollbars",
        "@supports selector(::-webkit-scrollbar)"
      );
      addVariant("children", "& > *");
      addVariant("scrollbar", "&::-webkit-scrollbar");
      addVariant("scrollbar-track", "&::-webkit-scrollbar-track");
      addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb");
    },
  ],
};
