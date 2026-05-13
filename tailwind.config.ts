import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#38bdf8", // Sky Blue elegante
          hover: "#0ea5e9",
        },
        background: "#020617",   // Slate 950 (Azul profundo profesional)
        foreground: "#f8fafc",   // Slate 50
        card: "#0f172a",         // Slate 900
        muted: "#64748b",        // Slate 500 para textos secundarios
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
