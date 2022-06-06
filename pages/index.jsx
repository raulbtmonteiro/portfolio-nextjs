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

function Home() {
  const [theme, setTheme] = useState(dark);

  return (
    <>
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
