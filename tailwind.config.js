/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // your custom color
      },
    },
  },
};
