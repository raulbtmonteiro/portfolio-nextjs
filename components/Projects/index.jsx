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

export const Projects = ({ data }) => {
  const filteredProjects = data.filter((item) => item.show === true);

  return (
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectsTitle>Projetos</ProjectsTitle>
        <ProjectsDisplay>
          {filteredProjects.map((item) => {
            return (
              <ProjectCard key={item.name}>
                <a href={item.deployLink} target="_blank" rel="noreferrer">
                  <CardImg src={item.img} alt={item.alttex} loading="lazy" />
                </a>
                <CardTitleContainer>
                  <CardTitle>{item.name}</CardTitle>
                  {!item.isDone && <CardIsDone>em desenvolvimento</CardIsDone>}
                </CardTitleContainer>
                <CardDescription>{item.description}</CardDescription>
                <CardTecnologies>{item.stacks}</CardTecnologies>
                <CardButtonWrapper>
                  <CardButton target="_blank" href={item.deployLink}>
                    <img src="/images/link.svg" alt="ícone de link" />{" "}
                    Visualizar
                  </CardButton>

                  <CardButton target="_blank" href={item.repositoryLink}>
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
  );
};
