import starlightPlugin from '@astrojs/starlight-tailwind';
import daisyui from 'daisyui';

const accent = { 200: '#c7bfff', 600: '#742ef5', 900: '#351d6f', 950: '#25194b' };
const gray = {
  100: '#f6f6f6',
  200: '#eeeeee',
  300: '#c2c2c2',
  400: '#8b8b8b',
  500: '#585858',
  700: '#383838',
  800: '#272727',
  900: '#181818',
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
  plugins: [starlightPlugin(), daisyui],
  daisyui: {
    prefix: 'daisy-',
  },
};
