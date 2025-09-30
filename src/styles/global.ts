// Dependencies
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root, #__next {
    background-color: #eceeee;
    min-width: 360px;
    scrollbar-width: thin;
    scrollbar-color: #ebebeb transparent;
  }

  html { scroll-behavior: smooth; }

  body, div {
    -webkit-font-smoothing: antialiased;
  }

  *, body, input, button, textarea, span, h1, h2, h3, h4, h5, h6 {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
  }

  *:focus {
    outline: 0;
  }

  img {
    user-select: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
