/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html", "./src/**/*.{js,tsx,ts,jsx}"],
  theme: {
    extend: {
      width: {
        '700': '700px'
      },
      height: {
        "90vh": "90vh"
      }
    },
    fontFamily: {
      Pacifico: ['Pacifico', 'cursive'],
      Poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}
