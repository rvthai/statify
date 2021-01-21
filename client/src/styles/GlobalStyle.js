import { createGlobalStyle } from "styled-components";
import font from "../fonts";
import theme from "./theme";

const { color, fontSize } = theme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Circular Std";
    src: url(${font.black}) format('truetype');
    font-style: normal;
    font-weight: 900;
  }

  @font-face {
    font-family: "Circular Std";
    src: url(${font.bold}) format('truetype');
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "Circular Std";
    src: url(${font.medium}) format('truetype');
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "Circular Std";
    src: url(${font.book}) format('truetype');
    font-style: normal;
    font-weight: 400;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit,
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  body {
    min-height: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: "Circular Std", "sans-serif";
    font-size: 16px;
    background-color: ${color.offBlack};
    color: #fff;
  }

  h1, h2 {
    letter-spacing: -0.025em;
    margin: 10px 0 10px 0;
    font-size: ${fontSize.xxl}
  }

  h1 {
    font-weight: 900;
  }

  h2 {
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 8vw;
    }
  }

  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 16px;
  }

  p {
    font-weight: 400;
    margin: 0;
    color: ${color.lightGray};
    font-size: ${fontSize.xs};
  }

  button {
    font-family: "Circular Std", "sans-serif";
    font-weight: 500;
  }
`;

export default GlobalStyle;
