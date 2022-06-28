module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        bluegray_50: "#eaecf0",
        gray_901: "#17202e",
        gray_902: "#0d1624",
        gray_900: "#141e2b",
        bluegray_100: "#d6dae2",
        black_900_3f: "#0000003f",
        gray_50: "#f8f9fa",
        bluegray_900: "#29313e",
        bluegray_700: "#424c5d",
        bluegray_600: "#5f6c86",
        black_900: "#000919",
        bluegray_300: "#9ea8ba",
        black_901: "#000000",
        white_A700: "#ffffff",
        bluegray_901: "#262b35",
      },
      fontFamily: {
        gilroy: "Gilroy",
        opensans: "Open Sans",
        publicsans: "Public Sans",
      },
      borderRadius: {
        radius5: "5px",
        radius8: "8px",
        radius12: "12px",
        radius15: "15px",
        radius20: "20px",
        radius23: "23px",
        radius50: "50px",
        radius501: "50%",
        radius100: "100px",
      },
      letterSpacing: { ls1: "1px" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};