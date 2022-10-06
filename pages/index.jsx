import {
  Header,
  Intro,
  AboutMe,
  Experiences,
  Projects,
  Footer,
} from "../components";
import { GlobalStyle } from "../themes/globalStyle";
import { dark } from "../themes/dark";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

function Home() {
  const [theme, setTheme] = useState(dark);

  return (
    <>
      <Head>
        <html lang="pt-br" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VB8JWPPXDS"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-VB8JWPPXDS');
          `,
          }}
        />
        <title>Portfólio - Raul Monteiro</title>
        <link rel="icon" href="/images/iuricode-logo.png" />
        <link rel="apple-touch-icon" href="/images/iuricode-logo.png" />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Intro />
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
