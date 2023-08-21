import { DefaultTheme } from "styled-components";
import "@fontsource/rubik";
import "@fontsource/roboto";
import "@fontsource/rubik/700.css";

const lightTheme: DefaultTheme = {
  colors: {
    bg: {
      primary: "#F5F5F5",
      secondary: "white",
    },
    txt: {
      primary: "#262531",
      secondary: "#3a3a3a",
    },
    primary: "#827AE0",
    light: "#FFFFFF",
    dark: "#000000",
    heading: "#e6e6e6",
  },

  fonts: { primary: "Roboto", secondary: "Rubik" },

  fontSizes: {
    extrasmall: "14px",
    smaller: "16px",
    small: "18px",
    medium: "24px",
    large: "28px",
    extralarge: "58px",
  },
};

export default lightTheme;
