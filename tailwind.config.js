/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        inem: {
          blue: "#0b5ed7",
          navy: "#0a2a66",
          navy2: "#123a8c",
          green: "#28a745",
          amber: "#ffc107",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(10,42,102,0.08)",
        hover: "0 18px 40px rgba(10,42,102,0.16)",
      },
      backgroundImage: {
        "navy-gradient": "linear-gradient(135deg, #0a2a66, #123a8c)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        blob: "blob 12s infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        blob: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(20px,-30px) scale(1.1)" },
          "100%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};
