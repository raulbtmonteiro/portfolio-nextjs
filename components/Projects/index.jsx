import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsDisplay,
  ProjectCard,
  CardImg,
  CardTitle,
  CardDescription,
  CardTecnologies,
  CardButton,
} from "./style";
import { ThemeProvider, useTheme } from "styled-components";

const projectsArray = [
  {
    img: "/images/projects/christmas.jpg",
    name: "Christmas",
    description:
      "Projeto realizado com base no desafio 16 do Iuri Silva, idealizador do projeto Codelândia. Toda a composição do código é de autoria própria. Utilizada a biblioteca React e styled-components para a confecção da página.",
    tecnologies: "JavaScript React styled-components",
    link: "https://62a08b963b2c3d0083b0e53c--funny-croissant-8ec43c.netlify.app/",
  },
  {
    img: "/images/projects/rachi.jpg",
    name: "Rachi",
    description:
      "Projeto realizado com base no desafio 19 do Iuri Silva, idealizador do projeto Codelândia. Toda a composição do código é de autoria própria. Utilizada a biblioteca React para a confecção da página.",
    tecnologies: "JavaScript CSS React",
    link: "https://62a11ac5886a0d04f6aaa9a5--glittery-gecko-51db8f.netlify.app/",
  },
  {
    img: "/images/projects/tip-calculator-app.jpg",
    name: "Tip calculator app",
    description:
      "Calculadora de gorjetas. Projeto desenvolvido em desafio proposto pelo site Frontend Mentor. Código de autoria própria.",
    tecnologies: "HTML CSS JavaScript",
    link: "https://tip-calculator-app-tau-seven.vercel.app/",
  },
];

export const Projects = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <ProjectsTitle>Projetos</ProjectsTitle>
          <ProjectsDisplay>
            {projectsArray.map((item) => {
              return (
                <ProjectCard key={item.name}>
                  <CardImg src={item.img} />
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <CardTecnologies>{item.tecnologies}</CardTecnologies>
                  <CardButton target="_blank" href={item.link}>
                    <img src="/images/link.svg" /> Visualizar
                  </CardButton>
                </ProjectCard>
              );
            })}
          </ProjectsDisplay>
        </ProjectsWrapper>
      </ProjectsContainer>
    </ThemeProvider>
  );
};
