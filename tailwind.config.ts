// tailwind.config.ts
import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // اطمینان از شناسایی تمام فایل‌ها
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            background: "#121212",
            primary: {
              DEFAULT: "#FFA726",
              foreground: "#1E1E1E",
            },
            secondary: {
              DEFAULT: "#FFD54F",
              foreground: "#1E1E1E",
            },
          },
        },
      },
    }),
  ],
};
