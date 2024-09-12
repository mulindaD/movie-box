/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', 'sans-serif'],
      },
      colors: {
        'rose' : {
          light: '#F9F3F5',
          DEFAULT: '#BE123C',
        },
      },
    },
  },
  plugins: [],
}

