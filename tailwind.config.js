/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    ripple: (theme) => ({
      colors: theme('colors'),
    }),
  },
  plugins: [require('tailwindcss-ripple')()],
};
