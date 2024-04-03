/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'about-1':"url('./src/assets/about-page_1.jpg')",
      },
      fontFamily: {
        'ojuju': ['Ojuju'],
        'monkey': ['Happy Monkey']
      }
    },
  },
  plugins: [],
}