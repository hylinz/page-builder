import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      gradientColorStops: {
        "white-gradient-start": "rgba(255, 255, 255, 0.8)",
        "white-gradient-middle": "rgba(240, 240, 240, 0.8)",
        "white-gradient-end": "rgba(150, 150, 150, 0.8)",
      },
      boxShadow: {
        "bs-custom-right": "4px 0 0 0 rgba(0, 0, 0, 0.6)",
        "bs-custom-down": "0 4px 0 0 rgba(0, 0, 0, 0.6)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        link: "#005E7C", 
        linkHover: "#001242", 
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fff",
          secondary: "#000",
          accent: "#FF5733", 
          neutral: "#2C3E50", 
          "base-100": "#E0E0E0", 
          info: "#3498DB", 
          success: "#27AE60",
          warning: "#F39C12", 
          error: "#E74C3C", 
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
