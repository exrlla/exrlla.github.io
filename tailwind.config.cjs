/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Unbounded: ['Unbounded', 'cursive'],
        Sora: ['Sora', 'sans-serif'],
        Shrikhand: ['Shrikhand', 'cursive'],
        Almarai: ['Almarai', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
  }
}