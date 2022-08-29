/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      screens: {
        xs: '500px',
        sm: '769px',
        md: '1000px',
        lg: '1200px',
        xl: '1400px',
      },
    },
  },
  plugins: [],
};
