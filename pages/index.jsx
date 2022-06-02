import { Fragment } from "react";
import Header from "../Componentsa/Header";
import AboutMe from "../Componentsa/AboutMe";
import Stacks from "../Componentsa/Stacks";
import Footer from "../Componentsa/Footer";

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
