import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle/GlobalStyle/GlobalStyle.ts";
import theme from "./GlobalStyle/theme/theme.ts";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter/appRouter.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </React.StrictMode>
);
