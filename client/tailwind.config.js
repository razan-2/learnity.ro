/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#0CADA7",
        customLightBlue: "#C7F1F0",
        customBlack: "#242331",
        customWhite: "#F0E6DD",
        customOrange: "#F8A12E",
        customLightOrange: "#FEC782"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'}
        },
        headerFallBounce: {
          '0%': { transform: 'translateY(-1000px)' },
          // '50%': { transform: 'translateY(0px)' },
          '100': { transform: 'translateY(0px)' }
        }
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        headerFallBounce: 'headerFallBounce 1.5s ease-in-out'
      },
      
    },
  },
  plugins: [],
}

