/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#282a36',
        light: '#6272a5',
        accent: '#bb94f6',
        foreground: '#f1f3f0'
        
      }
    },
  },

  plugins: [
    require('@tailwindcss/line-clamp'),
    // other plugins if any
  ],
}

