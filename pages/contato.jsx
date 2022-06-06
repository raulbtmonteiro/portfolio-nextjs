import { Header, Footer } from "../components";
import { GlobalStyle } from "../themes/globalStyle";
import { dark } from "../themes/dark";
import { useState } from "react";

function Contato() {
  const [theme, setTheme] = useState(dark);

  return (
    <>
      <GlobalStyle />
      <Header theme={theme} />
      <h1>Página em construção</h1>
      <Footer theme={theme} />
    </>
  );
}

export default Contato;
