/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "414px",
        tablet: "740px",
        desktop: "1366px",
      },
      fontFamily: {
        roboto: ["Roboto", "serif"],
        montserrat: ["Montserrat", "serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        cm_yellow: "#FFE000",
        purpleDark: {
          1: "#18111b",
          2: "#1e1523",
          3: "#301c3b",
          4: "#3d224e",
          5: "#48295c",
          6: "#54346b",
          7: "#664282",
          8: "#8457aa",
          9: "#8e4ec6",
          10: "#9a5cd0",
          11: "#d19dff",
          12: "#ecd9fa",
        },
        purple: {
          1: "#fefcfe",
          2: "#fbf7fe",
          3: "#f7edfe",
          4: "#f2e2fc",
          5: "#ead5f9",
          6: "#e0c4f4",
          7: "#d1afec",
          8: "#be93e4",
          9: "#8e4ec6",
          10: "#8347b9",
          11: "#8145b5",
          12: "#402060",
        },
        mauveDark: {
          1: "#121113",
          2: "#1a191b",
          3: "#232225",
          4: "#2b292d",
          5: "#323035",
          6: "#3c393f",
          7: "#49474e",
          8: "#625f69",
          9: "#6f6d78",
          10: "#7c7a85",
          11: "#b5b2bc",
          12: "#eeeef0",
        },
        mauve: {
          1: "#fdfcfd",
          2: "#faf9fb",
          3: "#f2eff3",
          4: "#eae7ec",
          5: "#e3dfe6",
          6: "#dbd8e0",
          7: "#d0cdd7",
          8: "#bcbac7",
          9: "#8e8c99",
          10: "#84828e",
          11: "#65636d",
          12: "#211f26",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
