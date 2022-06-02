import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { AboutMe } from "../components/AboutMe";
import { Experiences } from "../components/Experiences";
import { Footer } from "../components/Footer";
import { GlobalStyle } from "./globalStyle";

function Home() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <AboutMe />

      <Footer />
    </>
  );
}

export default Home;
