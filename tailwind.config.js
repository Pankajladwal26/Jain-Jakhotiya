/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlack: "#35373e",
        secondary: "rgba(255, 255, 255, 0.78)",
        primary: "#1f3e72",
        blueGradient: "linear-gradient(97.05deg, #4066ff 3.76%, #2949c6 100%)",
        orangeGradient: "linear-gradient(270deg, #ffb978 0%, #ff922d 100%)",
        whiteGradient: "rgba(255,255,255,0.522)",
        navbarGradient: "#3e3e40",
        dropdown: "#898e96",
        menuItems: "#aaaeb5",
        blue: "#4066ff",
        lightBlue: "#eeeeff",
        orange: "#ffa500",
        h2: "#1f3e72",
        text: "#777777",
        shadow: "0px 23px 21px -8px rgba(136, 160, 255, 0.25)",
        contentbg: "#f7f8f9",
        footer: "#111111",
        socials: "#999999",
        navdropdown: "#3e3e40",
        discover: "#F5F5DC",
      },
      spacing: {
        '10rem': '10rem',
        '15rem': '15rem',
        '20rem': '20rem',
        '22rem': '22rem',
        '25rem': '25rem',
        '30rem': '30rem',
        '35rem': '35rem',
        '40rem': '40rem',
      },
      width: {
        '800px': '800px',
      },
      lineHeight: {
        '4rem': '4rem',
      },
      blur: {
        '100': '100px',
      },
      screens: {
        '900px': '900px',
      },
      textShadow: {
        'glow': `0 0 5px rgba(245, 245, 220, 0.6), 0 0 10px rgba(245, 245, 220, 0.4)`,
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

