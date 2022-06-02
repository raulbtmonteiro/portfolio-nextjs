import styled from "styled-components";

export const ExperienceContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;

export const ExperienceWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 100px 0 100px;

  display: flex;
  flex-direction: column;
`;

export const Display = styled.div`
  display: grid;
  grid-template-columns: 24% 76%;
`;

export const DisplayTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2em;
  text-transform: uppercase;

  margin-bottom: 1.08em;
  color: ${(props) => props.theme.colors.light};
`;

export const ExperienceList = styled.ul``;

export const ListItem = styled.li`
  list-style-type: none;
  width: 69%;
  height: 55px;
  display: flex;
  align-items: center;

  padding-left: 36px;
  border-left: 2px solid ${(props) => props.theme.colors.backgroundDark200};

  color: ${(props) => props.theme.colors.grayLight};
`;

export const ExperienceInfo = styled.div`
  max-width: 636px;
`;

export const ExperienceTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2em;

  display: inline-block;
  margin-bottom: 1.08em;
  color: ${(props) => props.theme.colors.light};
`;

export const ExperienceDate = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;

  display: inline-block;
  position: relative;
  right: -142.84px;
  color: ${(props) => props.theme.colors.light};
`;

export const ExperienceEmployer = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;

  margin-bottom: 1.625em;
  color: ${(props) => props.theme.colors.blue};
`;

export const ExperienceDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.56em;

  color: ${(props) => props.theme.colors.grayLight};
`;
