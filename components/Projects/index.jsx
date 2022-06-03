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
    name: "Nome do projeto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "react",
  },
  {
    img: "",
    name: "Nome do projeto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "react",
  },
  {
    img: "",
    name: "Nome do projeto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "react",
  },
  {
    img: "",
    name: "Nome do projeto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "react",
  },
];

export const Projects = () => {
  return (
    <ProjectsContainer theme={dark}>
      <ProjectsWrapper>
        <ProjectsTitle theme={dark}>Projetos</ProjectsTitle>
        <ProjectsDisplay>
          {projectsArray.map((item) => {
            return (
              <ProjectCard>
                <CardImg theme={dark} />
                <CardTitle theme={dark}>{item.name}</CardTitle>
                <CardDescription theme={dark}>
                  {item.description}
                </CardDescription>
                <CardTecnologies theme={dark}>
                  {item.tecnologies}
                </CardTecnologies>
                <CardButton theme={dark}>
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
