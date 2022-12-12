import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #dddddd;
  background-color: #332222;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
button,
ul,
ol,
li {
  margin-top: 0;
  margin-bottom: 0;
}

ul {
  padding-left: 0;
  list-style: none;
}

button {
  padding: 0;
  background-color: transparent;
  border: none;
  color: inherit;
}

img,
a {
  display: block;
}

.link {
  text-decoration: none;
  color: inherit;
}

.list {
  list-style: none;
}
`;
