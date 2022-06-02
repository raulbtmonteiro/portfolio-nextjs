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

export const Projects = () => {
  return (
    <ProjectsContainer theme={dark}>
      <ProjectsWrapper>
        <ProjectsTitle theme={dark}>Projetos</ProjectsTitle>
        <ProjectsDisplay>
          <ProjectCard>
            <CardImg />
            <CardTitle theme={dark}>Nome do projeto</CardTitle>
            <CardDescription theme={dark}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </CardDescription>
            <CardTecnologies theme={dark}>react</CardTecnologies>
            <CardButton theme={dark}>Visualizar</CardButton>
          </ProjectCard>

          <ProjectCard>
            <CardImg />
            <CardTitle theme={dark}>Nome do projeto</CardTitle>
            <CardDescription theme={dark}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </CardDescription>
            <CardTecnologies theme={dark}>react</CardTecnologies>
            <CardButton theme={dark}>Visualizar</CardButton>
          </ProjectCard>

          <ProjectCard>
            <CardImg />
            <CardTitle theme={dark}>Nome do projeto</CardTitle>
            <CardDescription theme={dark}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </CardDescription>
            <CardTecnologies theme={dark}>react</CardTecnologies>
            <CardButton theme={dark}>Visualizar</CardButton>
          </ProjectCard>

          <ProjectCard>
            <CardImg />
            <CardTitle theme={dark}>Nome do projeto</CardTitle>
            <CardDescription theme={dark}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              blandit interdum odio eu varius.
            </CardDescription>
            <CardTecnologies theme={dark}>react</CardTecnologies>
            <CardButton theme={dark}>Visualizar</CardButton>
          </ProjectCard>
        </ProjectsDisplay>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};
