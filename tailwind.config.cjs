/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Primary: {
          DarkBlue: "#2d314d",
          LimeGreen: "#31d35c",
          BrightCyan: "#2bb7da",
        },
        Neutral: {
          GrayishBlue: "#9698a6",
          LightGrayishBlue: "#f3f4f6",
          VeryLightGray: "#fafafa",
          White: "#ffffff",
        },
      },
      fontSize: {
        "5xs": "0.5625rem", //9px
        "4xs": "0.625rem", //10px
        "3xs": "0.75rem", //12px
        "2xs": "0.8125rem", //13px
        xs: "0.875rem", //14px
        sm: ["1rem", "16px"], //16px
        base: "1.125rem", //18px
        lg: "1.5rem", //24px
        xl: ["1.75rem", "34px"], //28px
        "2xl": ["2.1875rem", "120%"], //35px
        "3xl": ["2.375rem", "34px"], //38px
        "4xl": "3.5rem", //56px
      },
      fontFamily: { "public-sans": "Public Sans" },
      letterSpacing: {
        tightest: "-.02em",
        tighter: "-.015em",
        tight: "-.01em",
        normal: "0",
        wide: ".01em",
        wider: ".05em",
        widest: ".1em",
      },
    },
  },
  plugins: [],
};

/** npx tailwindcss -i ./input.css -o ./style.css --watch */
