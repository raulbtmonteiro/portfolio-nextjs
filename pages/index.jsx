import {
  Header,
  Main,
  AboutMe,
  Experiences,
  Projects,
  Footer,
} from "../components";
import { GlobalStyle } from "../themes/globalStyle";
import { dark } from "../themes/dark";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Html } from "next/dist/pages/_document";
import Head from "next/head";

function Home() {
  const [theme, setTheme] = useState(dark);

  return (
    <>
      <Head>
        <title>Portfólio - Raul Monteiro</title>
        <link rel="icon" href="/images/iuricode-logo.png" />
        <link rel="apple-touch-icon" href="/images/iuricode-logo.png" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Main />
          <AboutMe />
          <Experiences />
          <Projects />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Home;
