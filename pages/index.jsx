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
        {"<!-- Google Tag Manager (noscript) -->"}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTCR6RX');`
          }}
        />
        {"<!-- End Google Tag Manager (noscript) -->"}
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
        <meta
          name="description"
          content="Página de portfólio de Raul Monteiro"
        />
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
