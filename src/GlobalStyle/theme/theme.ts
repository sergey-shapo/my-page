import { DefaultTheme } from "styled-components";
import "@fontsource/rubik";
import "@fontsource/roboto";
import "@fontsource/rubik/700.css";

const theme: DefaultTheme = {
  colors: {
    bg: {
      primary: "#060608",
      secondary: "#14141A",
    },
    txt: {
      primary: "#E1E1E1",
      secondary: "#A6A6A6",
    },
    primary: "#827AE0",
    light: "#FFFFFF",
    dark: "#000000",
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

export default theme;
