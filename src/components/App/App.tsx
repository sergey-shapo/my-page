import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../GlobalStyle/GlobalStyle/GlobalStyle";
import darkTheme from "../../GlobalStyle/theme/darkTheme";
import lightTheme from "../../GlobalStyle/theme/lightTheme";
import AppContext from "../../context";

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <AppContext.Provider value={toggleTheme}>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default App;
