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
  }

  #root {
    height: 100vh;
    overflow: hidden;
  }
`;
