/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#050810",
        night: "#0a0f24",
        glow: "#7dd3fc",
        mist: "#a5f3fc",
        violetsoft: "#c4b5fd",
        firefly: "#fde68a",
        mint: "#a7f3d0",
      },
      borderRadius: {
        panel: "24px",
        card: "16px",
      },
    },
  },
  plugins: [],
};
