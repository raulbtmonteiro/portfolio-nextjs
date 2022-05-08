import { Fragment } from "react";
import Header from "../Components/Header/Header";
import AboutMe from "../Components/AboutMe/AboutMe";
import Stacks from "../Components/Stacks/Stacks";
import Footer from "../Components/Footer/Footer"

function Home(){
    return(
        <Fragment>
            <Header />
            <AboutMe />
            <Stacks />
            <Footer />
        </Fragment>  
    )
}

export default Home