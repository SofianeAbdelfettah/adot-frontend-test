module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      title: ["OpenSans", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3fd48b",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      secondary: "#333333",
    }),
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [],
};
