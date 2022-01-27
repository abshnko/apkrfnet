module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-purple": "rgba(191, 123, 230, 0.13)",
      },
      height: {
        "95vh": "95vh",
      },
    },
  },
  plugins: [],
};
