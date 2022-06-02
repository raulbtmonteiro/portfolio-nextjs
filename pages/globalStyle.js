import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600&display=swap');
    font-family: 'Inter', sans-serif;
  }
`;
