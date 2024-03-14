/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
    "traveller-img": "url('frontend/src/assets/IMG_20231020_013101.jpg')",
    },
    extend: {
      colors: {
        "w-background": "#fff",
        dimgray: "#666",
        lightgray: "#ccc",
        yellow: "#f1a501",
        darkgoldenrod: "#bd7300",
        st: "#181e4b",
        salmon: {
          "100": "#e6755e",
          "200": "#df6951",
        },
        indianred: "#cb5b45",
        papayawhip: "#fff1da",
        st1: "#212832",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        "abhaya-libre-medium": "'Abhaya Libre Medium'",
        volkhov: "Volkhov",
        poppins: "Poppins",
      },
      borderRadius: {
        "sm-3": "13.3px",
        "6xs": "7px",
        "6xs-7": "6.7px",
      },
    },
    fontSize: {
      xs: "12px",
      base: "16px",
      mini: "15px",
      "13xl": "32px",
      lgi: "19px",
      "92xl-7": "111.7px",
      "5xl": "24px",
      "3xl-6": "22.6px",
      "21xl": "40px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
