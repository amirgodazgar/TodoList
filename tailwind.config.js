module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        md: "-10px -10px 30px #ffffff 10px 10px 30px #aeaec0 40% ",
      },
    },
  },
  plugins: [],
};
