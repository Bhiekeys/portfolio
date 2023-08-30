/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2BB32A',
        secondary: '#2E86C1',
      },
    },
  },
  plugins: [],
};
