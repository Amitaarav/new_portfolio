/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7AB0A",
      },
      fontFamily: {
        satisfies: ['"Satisfy"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'red-shadow': '0 0 20px 5px rgb(255, 0, 0)',
      },
      animation: {
        "spin-superslow": "spin 18s linear infinite",
        rocket: "rocket 3s linear infinite",
        shine: "shine 3s linear infinite", // 💡 added shine
      },
      keyframes: {
        rocket: {
          "0%, 100%": {
            transform: "rotate(-2deg) translate(0px, 0px)",
          },
          "50%": {
            transform: "rotate(2deg) translate(50px, 50px)",
          },
        },
        shine: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "400% 50%" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
],
};

export default config;
