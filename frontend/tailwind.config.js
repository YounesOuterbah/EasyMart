/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: { heroBg: "url(/Rectangle.png)" },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
