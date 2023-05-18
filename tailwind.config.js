/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
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
          primary: "#6B46C1", // Purple
          secondary: "#F6E05E", // Yellow
          background: "#F7FAFC", // White
          text: "#2D3748", // Dark text for light mode
        },
        dark: {
          primary: "#9F7AEA", // Lighter purple for dark mode
          secondary: "#F6E05E", // Yellow remains the same
          background: "#2D3748", // Dark background for dark mode
          text: "#F7FAFC", // Light text for dark mode
        },
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
