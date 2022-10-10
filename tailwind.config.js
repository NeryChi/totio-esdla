/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ringbearer': ['RINGBEARER', 'cursive'],
        'aniron': ['ANIRON', 'cursive']
      }
    },
  },
  plugins: [],
}
