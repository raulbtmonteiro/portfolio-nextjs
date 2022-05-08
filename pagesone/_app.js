import react from 'react';
import '../Components/AboutMe/AboutMe.css';
import '../Components/Contact/Contact.css';
import '../Components/Education/Education.css';
import '../Components/Experiences/Experiences.css';
import '../Components/Footer/Footer.css';
import '../Components/Header/Header.css';
import '../Components/Stacks/Stacks.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}