/** @type {import('tailwindcss').Config} */
/* eslint-disable global-require */
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
