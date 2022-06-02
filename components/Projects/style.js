import styled from "styled-components";

export const ProjectsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark200};
`;

export const ProjectsWrapper = styled.div`
  max-width: 1170px;
  padding: 100px 0 100px;
  margin: 0 auto;
`;

export const ProjectsTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2em;

  text-transform: uppercase;
  margin-bottom: 2.5em;
  color: ${(props) => props.theme.colors.light};
`;

export const ProjectsDisplay = styled.div`
  display: flex;
`;

export const ProjectCard = styled.div``;

export const CardImg = styled.img``;

export const CardTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2em;

  margin-bottom: 1.25em;
  color: ${(props) => props.theme.colors.light};
`;

export const CardDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.62em;

  max-width: 438px;
  margin-bottom: 1.625em;
  color: ${(props) => props.theme.colors.grayLight};
`;

export const CardTecnologies = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7em;

  margin-bottom: 2em;
  color: ${(props) => props.theme.colors.blue};
`;

export const CardButton = styled.button``;
