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

const projectsArray = [
  {
    img: "/images/projects/christmas.jpg",
    name: "Christmas",
    description:
      "Projeto realizado com base no desafio 16 do Iuri Silva, idealizador do projeto Codelândia. Toda a composição do código é de autoria própria. Utilizada a biblioteca React e styled-components para a confecção da página.",
    tecnologies: "JavaScript React styled-components",
    link: "https://github.com/raulbtmonteiro/react-christmas",
  },
  {
    img: "/images/projects/rachi.jpg",
    name: "Rachi",
    description:
      "Projeto realizado com base no desafio 19 do Iuri Silva, idealizador do projeto Codelândia. Toda a composição do código é de autoria própria. Utilizada a biblioteca React para a confecção da página.",
    tecnologies: "JavaScript CSS React",
    link: "https://github.com/raulbtmonteiro/react-rachi",
  },
  {
    img: "/images/projects/rachi.jpg",
    name: "Busca CEP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "React",
    link: "",
  },
  {
    img: "/images/projects/tip-calculator-app.jpg",
    name: "Tip calculator app",
    description:
      "Projeto desenvolvido em desafio proposto pelo site Frontend Mentor. Código de autoria própria.",
    tecnologies: "HTML CSS JavaScript",
    link: "https://tip-calculator-app-tau-seven.vercel.app/",
  },
];

export const Projects = ({ theme }) => {
  return (
    <ProjectsContainer theme={theme} id="projects">
      <ProjectsWrapper>
        <ProjectsTitle theme={theme}>Projetos</ProjectsTitle>
        <ProjectsDisplay>
          {projectsArray.map((item) => {
            return (
              <ProjectCard key={item.name}>
                <CardImg theme={theme} src={item.img} />
                <CardTitle theme={theme}>{item.name}</CardTitle>
                <CardDescription theme={theme}>
                  {item.description}
                </CardDescription>
                <CardTecnologies theme={theme}>
                  {item.tecnologies}
                </CardTecnologies>
                <CardButton theme={theme} target="_blank" href={item.link}>
                  <img src="/images/link.svg" /> Visualizar
                </CardButton>
              </ProjectCard>
            );
          })}
        </ProjectsDisplay>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};
