/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './**/*.html'

],
  theme: {
      colors: {
          transparent: 'transparent',
          gray: colors.neutral,
          white: colors.white,
          indigo: colors.indigo,
          black: colors.black,
          red: colors.red,
          purple: colors.purple,
      },
      extend: {
          colors: {
            transparent: 'transparent',
            gray: colors.neutral,
            white: colors.white,
            indigo: colors.indigo,
            black: colors.black,
            red: colors.red,
            purple: colors.purple,
          },
      },  
  },
  plugins: [
    require ('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp')
  ]
}
