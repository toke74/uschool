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
       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        overflow-x: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .link-stlye{
        text-decoration: underline;
        color:${({ theme }) => theme.colors.blue_300}
    }

    .link-stlye:hover {
    opacity: 0.6;
  }
`;

export default GlobalStyles;
