import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle/GlobalStyle/GlobalStyle.ts";
import theme from "./GlobalStyle/theme/theme.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
