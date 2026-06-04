import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf8ff",
          100: "#d7edff",
          200: "#B9E1FF",
          300: "#88D0FF",
          400: "#50B5FF",
          500: "#2893FF",
          600: "#1677FF",
          700: "#0A5CEB",
          800: "#0F4ABE",
          900: "#134295",
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
