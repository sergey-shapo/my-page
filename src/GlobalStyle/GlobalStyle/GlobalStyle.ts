import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,
  ::before,
  ::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
 html, body {
  min-height: 100vh;
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Roboto',sans-serif;
  font-display: swap;
  vertical-align: baseline;
  font-weight: 400;
  letter-spacing: 0.5px;
  word-wrap: break-word;
  color: ${(props) => props.theme.colors.txt.secondary}
  }
  
  h1,
  h2,
  h3,
  h4
  {
    font : inherit;
    padding: 10px 0;
    margin: 0;
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
