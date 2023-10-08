import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        sans: "Inter",
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/bg-grid.png')",
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
