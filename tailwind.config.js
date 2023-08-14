/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Fasthand", "cursive"],
        MyFont: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
