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
  CardButtonWrapper,
  CardButton,
} from "./styles";
import { ThemeProvider, useTheme } from "styled-components";

const projectsArray = [
  {
    img: "/images/projects/ecommerce-product-page.jpg",
    alttex: "Captura de tela do projeto E-commerce product page.",
    name: "E-commerce product page",
    description:
      "Página de produto de e-commerce. Projeto desenvolvido em desafio proposto pelo site Frontend Mentor. Código de autoria própria. Utilizadas as bibliotecas React e Styled-components para confecção da página. Utilização das React Hooks: useState e useEffect.",
    tecnologies: "JavaScript | React | styled-components",
    link: "https://raulbtmonteiro-ecommerce-page.netlify.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/ecommerce-product-page"
  },
  {
    img: "/images/projects/christmas.jpg",
    alttex: "Captura de tela do projeto Christmas.",
    name: "Christmas",
    description:
      "Projeto realizado com base no desafio 16 do Iuri Silva, idealizador do projeto Codelândia. Toda a composição do código é de autoria própria. Utilizada a biblioteca React e styled-components para a confecção da página.",
    tecnologies: "JavaScript | React | styled-components",
    link: "https://raulbtmonteiro-christmas.netlify.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/react-christmas"
  },
  {
    img: "/images/projects/rachi.jpg",
    alttex: "Captura de tela do projeto Rachi.",
    name: "Rachi",
    description:
      "Projeto realizado com base no desafio 19 do Iuri Silva, idealizador do projeto Codelândia. Toda a composição do código é de autoria própria. Utilizada a biblioteca React para a confecção da página.",
    tecnologies: "JavaScript | CSS | React",
    link: "https://raulbtmonteiro-rachi.netlify.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/react-rachi"
  },
  {
    img: "/images/projects/tip-calculator-app.jpg",
    alttex: "Captura de tela do projeto Tip calculator app.",
    name: "Tip calculator app",
    description:
      "Calculadora de gorjetas. Projeto desenvolvido em desafio proposto pelo site Frontend Mentor. Código de autoria própria.",
    tecnologies: "HTML | CSS | JavaScript",
    link: "https://tip-calculator-app-tau-seven.vercel.app/",
    linkRepositorio: "https://github.com/raulbtmonteiro/tip-calculator-app"
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
                  <CardImg src={item.img} alt={item.alttex} />
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                  <CardTecnologies>{item.tecnologies}</CardTecnologies>
                  <CardButtonWrapper>
                    <CardButton target="_blank" href={item.link}>
                      <img src="/images/link.svg" alt="ícone de link"/> Visualizar
                    </CardButton>

                    <CardButton target="_blank" href={item.linkRepositorio}>
                      <img src="/images/link.svg" alt="ícone de link"/> Repositório
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
