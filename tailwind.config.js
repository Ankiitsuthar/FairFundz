/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        emerald: { DEFAULT: "#10B981" },
        amber: { DEFAULT: "#F59E0B" },
        slate900: "#0F172A",
        slate600: "#475569",
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
}
