/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        extraGrey:"#F6F6F6",
        lightYellow:"#FEEE00"
      },
      screen: {
        sm: "576px",
        md: "768px",
        lg: "992px",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1440px",
        },
      },
      fontSize:{
        lg:"16px",
        xl:"24px"
      },
      fontWeight:{
        sm:"400",
        md:"500",
        lg:"600"
      }
    },
  },
  plugins: [],
};
