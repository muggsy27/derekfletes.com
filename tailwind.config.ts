import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx}"],
  theme: {},
  plugins: [require("daisyui")],
} satisfies Config;
