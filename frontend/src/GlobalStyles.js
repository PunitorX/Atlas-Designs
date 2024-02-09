// GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import { color } from "./GlobalColors";

const GlobalStyle = createGlobalStyle`
  #root {
    height: auto;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #e0e0e0;
    color: #000;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle