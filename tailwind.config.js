/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#23BE0A',
        secondary: '#59C6D2',
        'light-grey': '#131313CC',
        'black-shade': '#131313',
      },
    },
  },
  plugins: [require('daisyui')],
};
