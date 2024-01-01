/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        
      },
      colors: {
        'hamberger': {
          100: '#03071E',
          200: '#370617',
          300: '#6A040F',
          400: '#9D0208',
          500: '#D00000',
          600: '#DC2F02',
          700: '#E85D04',
          800: '#F48C06',
          900: '#FAA307',
          1000:'#FFBA08'
        }
      },
    },
  },
  plugins: [],
}

