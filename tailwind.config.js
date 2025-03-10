/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
  content: ["./index.html", "./carpetProject.html", "./assets/js/script.js"],
  theme: {
    container: {
      width: "auto",
      maxWidth: "none",
    },
    
    extend: {
      fontFamily: {
        serif: ["ui-serif", "Georgia"],
        Arial: ["Arial", "Helvetica", "sans-serif"],
        sans: ["ui-sans-serif", "system-ui"],
      },
      colors: {
        customBg: "#1c3554",
        customText: "#59e0d4",
        "custom-light-blue": "#E6FDFF",
        "custom-light-blue1": "#4A90A4",
        "custom-light-blue2": "#000080",
      },
      backdropBlur: {
        "10px": "10px",
      },
    },
  },
  corePlugins: {
    container: false, // 🔥 Completely disables Tailwind’s .container class
  },
  plugins: [],
};
