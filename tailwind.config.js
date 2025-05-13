/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#374151", // Input field background
          750: "#2d3344", // Slightly darker card background
          800: "#1f2330", // Card backgrounds, darker elements
          850: "#181c28", // Main page background (slightly lighter than 900)
          900: "#111319", // Sidebar, very dark elements
          600: "#4b5563", // Input field border
          400: "#9ca3af", // Lighter text, placeholder
          300: "#d1d5db", // Normal text
          200: "#e5e7eb", // Headings or important text
        },
        lavender: {
          100: "#f5f3ff",
          200: "#ede9fe",
          300: "#ddd6fe", // Soft lavender for accents/text
          400: "#c4b5fd", // Brighter lavender for highlights
          500: "#a78bfa", // Main lavender accent (buttons, links)
          600: "#8b5cf6", // Darker lavender for hover states
          700: "#7c3aed",
        },
        purple: {
          DEFAULT: "#8b5cf6", // Alias for lavender-600 or a distinct purple
        },
        teal: { // New accent color
          300: "#99f6e4",
          400: "#5eead4",
          500: "#2dd4bf",
          600: "#14b8a6",
        },
        rose: { // Another accent for variation
          300: "#fecdd3",
          400: "#fda4af",
          500: "#f43f5e",
          600: "#e11d48",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
