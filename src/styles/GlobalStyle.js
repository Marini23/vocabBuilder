import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';

import Regular from '../fonts/FixelDisplay-Regular.woff2';
import Medium from '../fonts/FixelDisplay-Medium.woff2';
import SemiBold from '../fonts/FixelDisplay-SemiBold.woff2';
import Bold from '../fonts/FixelDisplay-Bold.woff2';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


html {
  scroll-behavior: smooth;
  }

@font-face {
    font-family: 'MacPaw Fixel Display';
    src: url(${Regular});
    font-weight: normal;
    font-style: normal;
  }

@font-face {
    font-family: 'MacPaw Fixel Display';
    src: url(${Medium});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'MacPaw Fixel Display';
    src: url(${SemiBold});
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'MacPaw Fixel Display';
    src: url(${Bold});
    font-weight: bold;
    font-style: normal;
  }

body {
height: 100vh;
margin: 0 auto;
color: #121417;
font-family: 'MacPaw Fixel Display', -apple-system, BlinkMacSystemFont, 
    sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}


ul 
 {
    list-style: none;
  }

button {
    cursor: pointer;
}

`;
