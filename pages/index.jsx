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

function Home() {
  const [theme, setTheme] = useState(dark);

  return (
    <>
      <GlobalStyle />
      <Header theme={theme} />
      <main>
        <Main theme={theme} />
        <AboutMe theme={theme} />
        <Experiences theme={theme} />
        <Projects theme={theme} />
      </main>
      <Footer theme={theme} />
    </>
  );
}

export default Home;
