/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-w-1464': {'max': '1464px'},
        'max-w-980' : {'max' : '980px'},
        'max-w-492' : {'max' : '492px'},
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        scroll: 'scroll 15s linear infinite',
        pause: 'none', // Add this class for hover to stop
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',  /* Internet Explorer 10+ */
          'scrollbar-width': 'none',     /* Firefox */
          '&::-webkit-scrollbar': {
            display: 'none',             /* Safari and Chrome */
          },
        },
      });
    },
  ],
}