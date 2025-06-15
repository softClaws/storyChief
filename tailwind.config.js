/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        mono: ['Share Tech Mono', 'monospace'],
        playwright: ['Playwright', 'serif'],
        playwrightSA: ['Playwrite AU SA', 'sans-serif']
      },
    },
  },
  plugins: [],
}

