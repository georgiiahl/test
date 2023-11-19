import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
   margin: 0;
   font-family: 'Inter', sans-serif;
 }

* {
    outline: none;
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

@media screen and (min-width: 320px) {
    body {
        font-size: 10px;
      }
  }
  @media screen and (min-width: 400px) {
    body {
        font-size: 12px;
      }
  }
  @media screen and (min-width: 768px) {
    body {
        font-size: 14px;
      }
  }
  @media screen and (min-width: 1024px) {
    body {
      font-size: 16px;
    }
  }

  @keyframes open {
    from {
      height: 0;
    }
    to {
      height: 50vh;
    }
  }


`;

