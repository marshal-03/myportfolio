/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002CD7",
        "primary-dark": "#0022A8",
      },
      fontFamily: {
        poiret: ["Poiret One", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out",
        "slide-in": "slideIn 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
