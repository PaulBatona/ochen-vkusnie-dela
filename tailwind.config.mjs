/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-pink': '#EB00FF',
        'brand-dark': '#0A0A0A',
        'brand-purple': '#120318',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(235, 0, 255, 0.5)',
        'glow-strong': '0 0 40px rgba(235, 0, 255, 0.8)',
        'glow-text': '0 0 10px rgba(235, 0, 255, 0.8), 0 0 20px rgba(235, 0, 255, 0.6)',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'script': ['Brush Script MT', 'cursive'],
      },
    },
  },
  plugins: [],
};
