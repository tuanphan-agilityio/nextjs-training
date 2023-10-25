/* eslint-disable */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        secondary: '#0d1222',
        tertiary: '#969696',
        quaternary: '#5463ff',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '18px',
        xl: '24px',
        '2xl': '36px',
        '3xl': '40px',
      },
      fontFamily: {
        'primary-regular': ['Poppins Regular', 'sans-serif'],
        'primary-bold': ['Poppins Bold', 'sans-serif'],
        'secondary-regular': ['Mada Regular', 'sans-serif'],
        'secondary-bold': ['Mada Bold', 'sans-serif'],
        'tertiary-regular': ['Signika Regular', 'sans-serif'],
        'tertiary-bold': ['Signika Bold', 'sans-serif'],
        'quaternary-regular': ['Roboto Regular', 'sans-serif'],
        'quaternary-bold': ['Roboto Bold', 'sans-serif'],
      },
      gradientColorStops: {
        'primary-gradient-start': '#7d89ff',
        'primary-gradient-end': '#ab40ff',
      },
    },
  },
  plugins: [],
};
