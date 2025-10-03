/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // use .dark or .light on <html> to toggle
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Serif Text", "ui-serif", "system-ui"],
      },
      colors: {
        bg: "rgb(var(--bg))",
        card: "rgb(var(--card))",
        text: "rgb(var(--text))",
        muted: "rgb(var(--muted))",
        primary: "rgb(var(--primary))",
        primaryFg: "rgb(var(--primary-foreground))",
        border: "rgb(var(--border))",
        orange: "rgb(var(--accent-orange))",
        red: "rgb(var(--accent-red))",
        green: "rgb(var(--accent-green))",
      },
      fontSize: {
        xxs: "10px",
      },
    },
  },
  plugins: [],
};
