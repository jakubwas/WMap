import { createGlobalStyle } from "styled-components";

export const basicTheme = {
  body: "rgb(255, 255, 255)",
  fontColor: "rgb(0, 0, 0)",
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    font-size: 62.5%;
  }

  p,a, h1, h2, h3, h4, h5, h6 {
    font-family: "Montserrat", sans-serif;
  }

  #root {
    height: 100vh;
    overflow: hidden;
  }
`;
