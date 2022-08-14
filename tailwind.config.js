/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        'rubik' : ['Rubik Dirt', 'cursive'],
        'lobster':['Lobster','cursive'],
        'caveat':['Caveat', 'cursive'],
        'roboto':['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}
