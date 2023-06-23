/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '1/3': '0 1 33.333333%',
      },
      colors: {
        "shop-pink": "#ffe3ff",
        "shop-green": "#e3ffe3",
        "shop-grey": "#eeeeee",
        "shop-brown": "#5d4e60",
        "shop-light-brown": "#c4adb0",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"]
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
      },
    },
  },
  plugins: [],
}
