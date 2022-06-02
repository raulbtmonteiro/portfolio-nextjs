import { Fragment } from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Stacks from "../components/Stacks";
import Footer from "../components/Footer";

function Home() {
  return (
    <Fragment>
      <Header />
      <AboutMe />
      <Stacks />
      <Footer />
    </Fragment>
  );
}

export default Home;
