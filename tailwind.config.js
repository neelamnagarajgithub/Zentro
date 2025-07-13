/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zentro': {
          'bg-primary': '#0B0E11',
          'bg-card': '#161B22',
          'accent-primary': '#00F3FF',
          'accent-secondary': '#00B8D9',
          'alert': '#FF6B6B',
          'success': '#00C48C',
          'text-primary': '#FFFFFF',
          'text-secondary': '#CBD5E1',
          'border': '#262C34',
        }
      }
    },
  },
  plugins: [],
};
