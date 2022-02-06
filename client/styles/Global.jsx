import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border: none;
    }

    html,
    body {
      
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export default GlobalStyles;
