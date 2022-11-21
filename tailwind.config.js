/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app.vue',
    './assets/**/*.{vue,js,css,scss}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
