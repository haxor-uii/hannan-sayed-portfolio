/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0C0C0C",
        burgundy: "#410306",
        paper: "#F5F2ED",
        dim: "#8A8A8A",
        faint: "#525252",
        sweep: "#E11D2E",
        firefly: "#fde68a",
      },
    },
  },
  plugins: [],
};
