/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#8ECAE6',
        'deep-blue': '#219EBC',
        accent: '#FFB703',
        'earth-tone': '#FB8500',
        'forest-green': '#4D908E',
        'dark-forest': '#277667',
        sunset: '#F8961E',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        ghibli:
          '0 10px 25px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
