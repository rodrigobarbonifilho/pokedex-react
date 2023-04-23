import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`    
  * {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }

    html {
      height: 100vh;
    }
`