import { Header, Footer } from "../components";
import { GlobalStyle } from "../themes/globalStyle";
import { dark } from "../themes/dark";
import { useState } from "react";
import { ThemeProvider } from "styled-components";

function Formacao() {
  const [theme, setTheme] = useState(dark);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <h1>Página em construção</h1>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Formacao;
