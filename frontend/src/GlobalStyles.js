// GlobalStyles.js
import { createGlobalStyle } from "styled-components";
import { color } from "./GlobalColors";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${color.ColorSix};
    color: #000;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;

export default GlobalStyle