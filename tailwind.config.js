/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-light': '#d3dce6',
        'blue-light': '#79A7D3',
        'blue-dark': '#6883BC',
        raspberry: '#8A307F',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
