import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Touche';
    src: url('../../public/fonts/Touche.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Touche';
    src: url('../../public/fonts/ToucheBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Touche';
    src: url('../../public/fonts/ToucheSemibold.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Touche';
    src: url('../../public/fonts/ToucheMedium.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Touche';
    src: url('../../public/fonts/ToucheLight.woff') format('woff');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Touche';
    src: url('../../public/fonts/Touche.woff') format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Touche';
    src: url('../../public/fonts/telefonBlack.woff') format('woff');
    font-weight: 700;
    font-style: normal;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font: 16px/1 sans-serif;
    font-family: 'Touche', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  div#root{
    height: 100%;
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
  }
  * {
    box-sizing: border-box;
  }
  header{
    svg{
      width: 180px;
      height: 72px;
    }
  }
  h1,
  h2,
  h3,
  h4,
  p,
  blockquote,
  figure,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }
  main,
  li {
    display: block;
  }
  ul { 
    list-style-type: disc; 
    list-style-position: inside; 
  }
  ol { 
    list-style-type: decimal; 
    list-style-position: inside; 
  }
  ul ul, ol ul { 
    list-style-type: circle; 
    list-style-position: inside; 
    margin-left: 16px; 
  }
  ol ol, ul ol { 
    list-style-type: lower-latin; 
    list-style-position: inside; 
    margin-left: 16px; 
  }
  h1,
  h2,
  h3,
  h4 {
    font-size: inherit;
  }
  h5,
  h6{
    margin: 0;
  }
  strong {
    font-weight: bold;
  }
  a,
  button {
    color: inherit;
  }
  a {
    text-decoration: none;
  }
  button {
    overflow: visible;
    border: 0;
    font: inherit;
    -webkit-font-smoothing: inherit;
    letter-spacing: inherit;
    background: none;
    cursor: pointer;
  }
  ::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  :focus {
    outline: 0;
  }
  img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
`;

export default GlobalStyles;
