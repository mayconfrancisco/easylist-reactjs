import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #000080;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
    font-size: 14px;
    color: #333;
    border: 0;
    background-color: unset;
    padding: 16px;
    transition: color .4s;

    &:hover {
      color: #000080;
    }
  }
`;

export default GlobalStyle;
