/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        flyerBg: "#02030A",
        flyerAccent: "#6EE7F9",
        flyerAccentSoft: "#1F2933",
        flyerTextSoft: "#9CA3AF"
      }
    }
  },
  plugins: []
};
