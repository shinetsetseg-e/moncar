import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./shared/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "rgb(var(--primary-50-rgb) / <alpha-value>)",
          100: "rgb(var(--primary-100-rgb) / <alpha-value>)",
          200: "rgb(var(--primary-200-rgb) / <alpha-value>)",
          300: "rgb(var(--primary-300-rgb) / <alpha-value>)",
          400: "rgb(var(--primary-400-rgb) / <alpha-value>)",
          500: "rgb(var(--primary-500-rgb) / <alpha-value>)",
          600: "rgb(var(--primary-600-rgb) / <alpha-value>)",
          700: "rgb(var(--primary-700-rgb) / <alpha-value>)",
          800: "rgb(var(--primary-800-rgb) / <alpha-value>)",
          900: "rgb(var(--primary-900-rgb) / <alpha-value>)",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        green: {
          bg: "#F0FDF4",
          active: "#16A34A",
        },
        red: {
          bg: "#FEF2F2",
          danger: "#DC2626",
        },
        orange: {
          bg: "#FFF6DB",
          warning: "#F9B634",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", "sans-serif"],
      },
      maxWidth: {
        site: "1280px",
      },
      boxShadow: {
        card: "0 8px 32px rgba(16, 24, 40, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
