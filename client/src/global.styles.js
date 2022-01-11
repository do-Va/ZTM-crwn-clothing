import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html, body, #root {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Open Sans Condensand';
  padding: 20px 0;

  @media only screen and (max-width: 800px) {
    padding: 10px;
  }
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: #222;
}

* {
  box-sizing: border-box;
}

#root {
  width: 95%;
  margin: 0 auto;
}
`;
