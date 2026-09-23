/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Keep these in sync with lib/theme.ts — that file is the source of
        // truth for anything that needs a raw color value (navigation options,
        // status bar, icon tints).
        background: "#080912",
        surface: "#111322",
        elevated: "#181B2E",
        border: "#232741",
        accent: {
          DEFAULT: "#6366F1",
          muted: "#4F46E5",
          soft: "#1E1F45",
        },
        content: {
          DEFAULT: "#F8FAFC",
          secondary: "#A5ABC4",
          muted: "#6B7191",
        },
      },
    },
  },
  plugins: [],
};
