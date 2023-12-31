/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        '242D5F': '#242D5F',
        '4A74A3': '#4A74A3',
        'F6F6F6': '#F6F6F6',
        '858282': '#858282',
        'F5F5F5': '#F5F5F5',
        '0D2BD2': '#0D2BD2',
        'E3292F': '#E3292F',
      },
      textColor: {
        'E3C34D': '#E3C34D',
        'F6F6F6': '#F6F6F6',
        '242D5F': '#242D5F',
      },
      fontFamily: {
        'iek-web': ['iek web', 'sans-serif'],
      },
      fontSize: {
        'xl': '.1.438rem',
        'small': '.875rem',
        '3xs': '.555rem',
        '4xs': '.215rem',
      },
    },
  },
  plugins: [],
}

