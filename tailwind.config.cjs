/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  plugins: [require('flowbite/plugin')],
  theme: {
    extend: {
      fontFamily: {
        Unbounded: ['Unbounded', 'cursive'],
        Sora: ['Sora', 'sans-serif'],
        Shrikhand: ['Shrikhand', 'cursive'],
        Almarai: ['Almarai', 'sans-serif'],
        Rubik: ['Rubik', 'sans-serif'],
        SpaceGrotesk: ['Space Grotesk', 'sans-serif'],
        IBMPlexMono: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [],
  }
}