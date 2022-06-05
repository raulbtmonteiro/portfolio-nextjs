import { dark } from "../../themes/dark";
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
    img: "",
    name: "Christmas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "JavaScript React styled-components",
    link: "https://github.com/raulbtmonteiro/react-christmas",
  },
  {
    img: "",
    name: "Rachi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "JavaScript CSS React",
    link: "https://github.com/raulbtmonteiro/react-rachi",
  },
  {
    img: "",
    name: "Busca CEP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "React",
    link: "",
  },
  {
    img: "",
    name: "Tip calculator app",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "HTML CSS JavaScript",
    link: "https://tip-calculator-app-tau-seven.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <ProjectsContainer theme={dark} id="projects">
      <ProjectsWrapper>
        <ProjectsTitle theme={dark}>Projetos</ProjectsTitle>
        <ProjectsDisplay>
          {projectsArray.map((item) => {
            return (
              <ProjectCard key={item.name}>
                <CardImg theme={dark} />
                <CardTitle theme={dark}>{item.name}</CardTitle>
                <CardDescription theme={dark}>
                  {item.description}
                </CardDescription>
                <CardTecnologies theme={dark}>
                  {item.tecnologies}
                </CardTecnologies>
                <CardButton theme={dark} target="_blank" href={item.link}>
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
