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
    name: "Nome do projeto 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "react",
  },
  {
    img: "",
    name: "Nome do projeto 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "react",
  },
  {
    img: "",
    name: "Nome do projeto 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit interdum odio eu varius.",
    tecnologies: "react",
  },
  {
    img: "",
    name: "Nome do projeto 4",
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
              <ProjectCard key={item.name}>
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
