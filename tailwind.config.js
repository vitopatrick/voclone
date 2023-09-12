/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        black: "satoshi-black",
        bold: "satoshi-bold",
        light: "satoshi-light",
        medium: "satoshi-medium",
        regular: "satoshi-regular",
        variable: "satoshi-variable",
      },
      colors: {
        bg: "#0c0a09",
        card: "#18181b",
        bgBoard: "#737373",
        button: "#059669",
      },
    },
  },
  plugins: [],
};
