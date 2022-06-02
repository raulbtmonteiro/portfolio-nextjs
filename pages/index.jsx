import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { AboutMe } from "../components/AboutMe";
import { Experiences } from "../components/Experiences";
import { Footer } from "../components/Footer";
import { GlobalStyle } from "./globalStyle";
import { Projects } from "../components/Projects";

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
