import { Fragment } from "react";
import Header from "../Components/Header/Header";
import Education from "../Components/Education/Education";
import Experiences from "../Components/Experiences/Experiences";
import Footer from "../Components/Footer/Footer"

function Formacao(){
    return(
        <Fragment>
            <Header />
            <Education />
            <Experiences />
            <Footer />
        </Fragment>  
    )
}

export default Formacao