import styled from "styled-components";

export const ProjectsContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark200};
`;

export const ProjectsWrapper = styled.div`
  max-width: 1170px;
  padding: 100px 24px 40px;
  margin: 0 auto;

  @media screen and (max-width: 720px) {
    padding: 40px 24px;
  }
`;

export const ProjectsTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2em;

  text-transform: uppercase;
  margin-bottom: 2.5em;
  color: ${(props) => props.theme.colors.light};

  @media screen and (max-width: 1170px) {
    margin-bottom: 1em;
  }
`;

export const ProjectsDisplay = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media screen and (max-width: 1170px) {
    justify-content: center;
  }

  @media screen and (max-width: 720px) {
    gap: 40px;
  }
`;

export const ProjectCard = styled.div`
  max-width: 530px;
  @media screen and (max-width: 720px) {
    width: 312px;
    max-width: 100%;
  }
`;

export const CardImg = styled.img`
  width: 530px;
  height: 200px;
  margin-bottom: 40px;

  border-left: 4px ${(props) => props.theme.colors.blue} solid;
  border-radius: 4px 0px 0px 4px;

  @media screen and (max-width: 720px) {
    max-width: 100%;
    max-height: 130px;
    margin-bottom: 24px;
  }
`;

export const CardTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1.25em;
  @media screen and (max-width: 720px) {
    margin-bottom: 1em;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2em;

  margin-right: 0.8em;
  color: ${(props) => props.theme.colors.light};

  @media screen and (max-width: 720px) {
    font-size: 16px;
  }
`;

export const CardIsDone = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7em;

  padding: 0 0.5em;
  color: ${(props) => props.theme.colors.light};
  background-color: #1b585c;
  opacity: 0.6;
  border-radius: 4px;

  @media screen and (max-width: 720px) {
    font-size: 12px;
  }
`;

export const CardDescription = styled.p`
  font-weight: 300;
  font-size: 16px;
  line-height: 1.62em;
  text-align: justify;

  height: 104px;
  margin-bottom: 1.625em;
  color: ${(props) => props.theme.colors.grayLight};

  @media screen and (max-width: 720px) {
    min-height: 108px;
    height: fit-content;
    font-size: 14px;
    line-height: 1.29em;
    margin-bottom: 0.6em;
  }
`;

export const CardTecnologies = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.7em;

  margin-bottom: 2em;
  color: ${(props) => props.theme.colors.blue};
`;

export const CardButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;
export const CardButton = styled.a`
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
  text-decoration: none;

  background-color: transparent;
  border: 2px transparent solid;
  border-image: linear-gradient(#9358f7, #10d7e2);
  border-image-slice: 1;

  img {
    margin-right: 1em;
    width: 24px;
    height: 24px;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.05);
  }

  @media screen and (max-width: 720px) {
    font-size: 12.8px;
    width: 100%;
    margin-bottom: 0;
  }
`;
