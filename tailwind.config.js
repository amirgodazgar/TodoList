module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        orangeBtn: {
          primary: "#ffe53b",
          secondary: "#ff2525",
        },
      },
      boxShadow: {
        'md': "-10px -10px 30px #ffffff 10px 10px 30px #aeaec0 40% ",
      },
    },
  },
  plugins: [],
};
