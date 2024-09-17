/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "var(--font-primary)",
      sans: ["var(--font-primary)"],
    },
    extend: {
      colors: {
        primary: "rgb(var(--color-primary))",
        blur: "var(--color-blur)",
        paragraph: "var(--color-paragraph)",
        bgLight: "rgb(var(--color-bgLight))",
        divider: "var(--color-divider)",
      },
    },
  },
  plugins: [],
};
