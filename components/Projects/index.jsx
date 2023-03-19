import { ThemeProvider, useTheme } from "styled-components";
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsDisplay,
  ProjectCard,
  CardImg,
  CardTitleContainer,
  CardTitle,
  CardIsDone,
  CardDescription,
  CardTecnologies,
  CardButtonWrapper,
  CardButton,
} from "./styles";

export const Projects = () => {
  const theme = useTheme();

  const filteredProjects = projectsArray.filter((item) => item.show === true);

  return (
    <ThemeProvider theme={theme}>
      <ProjectsContainer id="projects">
        <ProjectsWrapper>
          <ProjectsTitle>Projetos</ProjectsTitle>
          <ProjectsDisplay>
            {filteredProjects.map((item) => {
              return (
                <ProjectCard key={item.name}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <CardImg src={item.img} alt={item.alttex} />
                  </a>
                  <CardTitleContainer>
                    <CardTitle>{item.name}</CardTitle>
                    {!item.isDone && (
                      <CardIsDone>em desenvolvimento</CardIsDone>
                    )}
                  </CardTitleContainer>
                  <CardDescription>{item.description}</CardDescription>
                  <CardTecnologies>{item.tecnologies}</CardTecnologies>
                  <CardButtonWrapper>
                    <CardButton target="_blank" href={item.link}>
                      <img src="/images/link.svg" alt="ícone de link" />{" "}
                      Visualizar
                    </CardButton>

                    <CardButton target="_blank" href={item.linkRepositorio}>
                      <img src="/images/link.svg" alt="ícone de link" />{" "}
                      Repositório
                    </CardButton>
                  </CardButtonWrapper>
                </ProjectCard>
              );
            })}
          </ProjectsDisplay>
        </ProjectsWrapper>
      </ProjectsContainer>
    </ThemeProvider>
  );
};

const projectsArray = [
  {
    img: "/images/projects/invoice-app.jpg",
    alttex: "Captura de tela do projeto Invoice App.",
    name: "Invoice app",
    description:
      "Aplicativo para gerenciamento de notas fiscais. Projeto em desenvolvimento com base em desafio proposto pelo site Frontend Mentor. Código de autoria própria.",
    tecnologies: "TypeScript | React | styled-components",
    link: "https://invoice-app-gules.vercel.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/invoice-app",
    isDone: false,
    show: true,
  },
  {
    img: "/images/projects/ecommerce-product-page.jpg",
    alttex: "Captura de tela do projeto E-commerce product page.",
    name: "E-commerce product page",
    description:
      "Página de produto de e-commerce. Projeto desenvolvido em desafio proposto pelo site Frontend Mentor. Código de autoria própria. Utilização das React Hooks: useState, useEffect e useRef.",
    tecnologies: "JavaScript | React | styled-components",
    link: "https://raulbtmonteiro-ecommerce-page.netlify.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/ecommerce-product-page",
    isDone: true,
    show: true,
  },
  {
    img: "/images/projects/christmas.jpg",
    alttex: "Captura de tela do projeto Christmas.",
    name: "Christmas",
    description:
      "Projeto realizado com base no desafio 16 do Iuri Silva, idealizador do projeto Codelândia. Toda a composição do código é de autoria própria. Utilizada a biblioteca React e styled-components para a confecção da página.",
    tecnologies: "JavaScript | React | styled-components",
    link: "https://raulbtmonteiro-christmas.netlify.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/react-christmas",
    isDone: true,
    show: true,
  },
  {
    img: "/images/projects/rachi.jpg",
    alttex: "Captura de tela do projeto Rachi.",
    name: "Rachi",
    description:
      "Projeto realizado com base no desafio 19 do Iuri Silva, idealizador do projeto Codelândia. Toda a composição do código é de autoria própria. Utilizada a biblioteca React para a confecção da página.",
    tecnologies: "JavaScript | CSS | React",
    link: "https://raulbtmonteiro-rachi.netlify.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/react-rachi",
    isDone: true,
    show: false,
  },
  {
    img: "/images/projects/tip-calculator-app.jpg",
    alttex: "Captura de tela do projeto Tip calculator app.",
    name: "Tip calculator app",
    description:
      "Calculadora de gorjetas. Projeto desenvolvido em desafio proposto pelo site Frontend Mentor. Código de autoria própria.",
    tecnologies: "HTML | CSS | JavaScript",
    link: "https://tip-calculator-app-tau-seven.vercel.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/tip-calculator-app",
    isDone: true,
    show: true,
  },
];
