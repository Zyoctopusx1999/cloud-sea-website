/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9ff',
          100: '#e8eaff',
          200: '#c4c9ff',
          300: '#a1a8ff',
          400: '#7d87ff',
          500: '#5a66ff',
          600: '#3645ff',
          700: '#1324ff',
          800: '#0012eb',
          900: '#000fc2',
        },
      },
    },
  },
  plugins: [],
}