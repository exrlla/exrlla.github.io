/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Unbounded: ['Unbounded', 'cursive'],
        Sora: ['Sora', 'sans-serif'],
        Shrikhand: ['Shrikhand', 'cursive'],
    },
  },
  plugins: [],
  }
}