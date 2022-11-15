import styled from "styled-components";

export const ExperienceContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;

export const ExperienceWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 100px 24px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1170px) {
    padding: 40px 24px;
  }
`;

export const DisplayTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2em;
  text-transform: uppercase;

  margin-bottom: 1.08em;
  color: ${(props) => props.theme.colors.light};
`;

export const Display = styled.div`
  display: grid;
  grid-template-columns: 24% 76%;

  @media screen and (max-width: 720px) {
    grid-template-columns: 100%;
  }
`;

export const ExperienceList = styled.ul`
  @media screen and (max-width: 720px) {
    overflow-x: scroll;
    display: flex;
    white-space: nowrap;
    width: 100%;
    height: 55px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
  width: 75%;
  height: 55px;
  display: flex;
  align-items: center;

  padding-left: 36px;
  border-left: 2px solid ${(props) => props.theme.colors.backgroundDark200};

  color: ${(props) => props.theme.colors.grayLight};

  cursor: pointer;

  @media screen and (max-width: 720px) {
    border-left: none;
    border-bottom: 2px solid ${(props) => props.theme.colors.backgroundDark200};
    width: 144px;
    padding: 0 20px;
    margin: 0 auto;
    justify-content: center;
  }
`;

export const ExperienceInfo = styled.div`
  max-width: 636px;
`;


export const ExperienceTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.08em;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    margin: 2.5em 0 1em;
  }

`;

export const ExperienceTitle = styled.h3`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2em;
  justify-self: right;

  color: ${(props) => props.theme.colors.light};

  @media screen and (max-width: 720px) {
    font-size: 18px;
    text-align: left;
  }
`;

export const ExperienceDate = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;

  color: ${(props) => props.theme.colors.light};

  @media screen and (max-width: 720px) {
    font-size: 12px;
    text-align: left;
  }
`;

export const ExperienceEmployer = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5em;

  margin-bottom: 1.625em;
  color: ${(props) => props.theme.colors.blue};

  @media screen and (max-width: 720px) {
    font-size: 14px;
    line-height: 1.7em;
    margin-bottom: 1.14em;
  }
`;

export const ExperienceDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.56em;

  color: ${(props) => props.theme.colors.grayLight};
  text-align: justify;

  @media screen and (max-width: 720px) {
    font-size: 14px;
    line-height: 1.7em;
  }
`;
