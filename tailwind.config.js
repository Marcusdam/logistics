/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'krub': ['Krub', 'sans-serif'],
      },
      backgroundImage: {
        'split-50': 'linear-gradient(to right, #091242  50%,  #F4F4F4 50%)',
        'vertical-50': 'linear-gradient(to bottom, #091242  30%,  #F4F4F4 30%)',
      }
    },
  },
  plugins: [],
}