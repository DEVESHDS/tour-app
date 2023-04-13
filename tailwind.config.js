/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "kimo-bg": "url('/assets/images/hawaii-bg.webp')",
      },
      colors: {
        "kimo-green": "#008080",
        dark: "#001A1A",
        "kimo-lightgreen": "#E6F2F2",
        lightblack: "rgba(0,0,0,0.4)",
      },
      fontSize: {
        large: ["140px", "160px"],
        semilarge: ["64px", "60px"],
      },
      width: {
        74: "74px",
      },
      zIndex: {
        1: "1",
        400: "400",
        500: "500",
      },
    },
  },
  plugins: [],
};
