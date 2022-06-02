import { Fragment } from "react";
import Header from "../components/Header";
import Education from "../components/Education";
import Experiences from "../components/Experiences";
import Footer from "../components/Footer";

function Formacao() {
  return (
    <Fragment>
      <Header />
      <Education />
      <Experiences />
      <Footer />
    </Fragment>
  );
}

export default Formacao;
