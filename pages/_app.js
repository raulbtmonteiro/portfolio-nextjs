import react from "react";
import "../components/AboutMe/AboutMe.css";
import "../components/Contact/Contact.css";
import "../components/Education/Education.css";
import "../components/Experiences/Experiences.css";
import "../components/Footer/Footer.css";
import "../components/Header/Header.css";
import "../components/Stacks/Stacks.css";
import "../components/global.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
