/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#060814",
        midnight: "#0D1324",
        cyan: {
          DEFAULT: "#00E5FF",
        },
        tactical: "#10B981",
        borderline: "#1E293B",
      },
      borderRadius: {
        panel: "16px",
        card: "12px",
      },
    },
  },
  plugins: [],
};
