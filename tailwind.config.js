/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Quicksand']
    },
    fontWeight: {
      normal: '600'
    },
    // Note: This overrules font size configuration site wide
    // fontSize: {
    //   base: '1rem'
    // } 
  },
  plugins: []
}
