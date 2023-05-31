import {
  Header,
  Intro,
  AboutMe,
  Experiences,
  Projects,
  Footer,
} from "../components";
import { GlobalStyle } from "../themes/globalStyle";
import { dark } from "../themes/dark";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import { createClient } from "../prismicio";

export default function Home({ intro, about, experiences, projects }) {
  const [theme, setTheme] = useState(dark);

  return (
    <>
      <Head>
        <script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){;w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PTCR6RX');`,
          }}
        />
        <title>Portfólio - Raul Monteiro</title>
        <link rel="icon" href="/images/iuricode-logo.png" />
        <link rel="apple-touch-icon" href="/images/iuricode-logo.png" />
        <meta
          name="description"
          content="Página de portfólio de Raul Monteiro"
        />
      </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Intro data={intro} />
          <AboutMe data={about} />
          <Experiences data={experiences} />
          <Projects data={projects} />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export const getStaticProps = async () => {
  const cliente = createClient();

  const intro = await cliente.getSingle("intro");

  const about = await cliente.getSingle("sobre_mim");

  const experiences = await cliente.getAllByType("experiencia", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });
  const experiencesData = await experiences.map((item) => {
    return {
      company: item.data.company[0].text,
      position: item.data.position[0].text,
      initialDate: item.data.initial_date[0].text,
      finalDate: item.data.final_date[0].text,
      description: item.data.description[0].text,
    };
  });

  const projects = await cliente.getAllByType("projeto", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });
  const projectsData = await projects.map((item) => {
    return {
      name: item.data.name[0].text,
      description: item.data.description[0].text,
      deployLink: item.data.deploy.url,
      repositoryLink: item.data.repository.url,
      img: item.data.project_image.url,
      alttex: item.data.project_image.alt,
      isDone: item.data.is_done,
      stacks: item.data.stacks[0].text,
      show: item.data.show,
    };
  });

  return {
    props: {
      intro: intro.data,
      about: about.data,
      experiences: experiencesData,
      projects: projectsData,
    },
  };
};
