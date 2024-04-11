/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mmd: { max: '768px' },
      },
      colors: {
        primary: 'rgba(35, 39, 47, 1)',
        secondary: 'rgba(64, 71, 86, 1)',
        silv: '#F5F6F7',
      },
      boxShadow: {
        'shadow-b': '0 2px 10px rgba(0,0,0,0.1)',
      },
      fontFamily: {
        primary: ['Montserrat', 'Poppins', 'sans-sefir'],
      },
    },
  },
  plugins: [],
};
