import styled from "styled-components";

export const ProjectsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark200};
`;

export const ProjectsWrapper = styled.div`
  max-width: 1170px;
  padding: 100px 0 40px;
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
  flex-wrap: wrap;
  gap: 20px;
`;

export const ProjectCard = styled.div``;

export const CardImg = styled.img`
  width: 530px;
  height: 200px;
  margin-bottom: 40px;

  border-left: 4px ${(props) => props.theme.colors.blue} solid;
  border-radius: 4px 0px 0px 4px;
`;

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

export const CardButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5em;

  width: 11.3em;
  height: 2.8em;
  margin-bottom: 3.75em;
  color: ${(props) => props.theme.colors.light};

  background-color: transparent;
  border: 2px transparent solid;
  border-image: linear-gradient(#9358f7, #10d7e2);
  border-image-slice: 1;
  img {
    margin-right: 1em;
  }
`;
