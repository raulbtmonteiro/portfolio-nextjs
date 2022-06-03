import {
  Header,
  Main,
  AboutMe,
  Experiences,
  Projects,
  Footer,
} from "../components";
import { GlobalStyle } from "../themes/globalStyle";

function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Main />
        <AboutMe />
        <Experiences />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default Home;
