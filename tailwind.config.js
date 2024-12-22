/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        "16/9": "56.25%", // 16:9 aspect ratio
      },
    },
  },
  plugins: [],
};

