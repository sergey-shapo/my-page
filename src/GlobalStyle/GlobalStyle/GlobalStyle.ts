import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
  
 html, body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: 'Roboto',sans-serif;
  font-display: swap;
  vertical-align: baseline;
  }
  
  h1,
  h2,
  h3,
  h4
  {
    font : inherit;
  }

  ul {
    list-style: none;
  }

  li {
    list-style: none;
  }

  input,
  textarea {
    font-family: inherit;
    border: none;
  }

  button {
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  p {
    margin: 0;
  }

`;

export default GlobalStyle;
