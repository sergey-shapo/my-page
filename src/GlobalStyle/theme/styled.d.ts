import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      light: string;
      dark: string;
      bg: { primary: string; secondary: string };
      txt: { primary: string; secondary: string };
    };

    fonts: {
      primary: string;
      secondary: string;
    };

    fontSizes: {
      extrasmall: string;
      medium: string;
      small: string;
      smaller: string;
      large: string;
      extralarge: string;
    };
  }
}
