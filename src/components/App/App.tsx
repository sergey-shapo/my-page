import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../GlobalStyle/GlobalStyle/GlobalStyle";
import darkTheme from "../../GlobalStyle/theme/darkTheme";
import lightTheme from "../../GlobalStyle/theme/lightTheme";

const App = (): React.ReactElement => {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Layout toggleTheme={toggleTheme} />;
    </ThemeProvider>
  );
};

export default App;
