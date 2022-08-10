/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e30813",
          200: "#f4f4f4",
        },
      },
    },
  },
  plugins: [],
};
