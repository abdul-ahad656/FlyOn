import type { Config } from "tailwindcss";

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#005D78",
        "primary-dark": "#0F2E3B",
        accent: "#C9A96A",

        background: "#FAFAF8",

        surface: "#F4F7F8",

        text: "#202124",

        "text-light": "#6B7280",
      },

      maxWidth: {
        container: "1320px",
      },

      borderRadius: {
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
      },

      fontFamily: {
        heading: ["General Sans", "sans-serif"],
        body: ["Satoshi", "sans-serif"],
      },

      boxShadow: {
        glass:
          "0 15px 40px rgba(0,0,0,.08)",

        luxury:
          "0 30px 80px rgba(0,0,0,.12)",
      },
    },
  },

  plugins: [],
} satisfies Config;