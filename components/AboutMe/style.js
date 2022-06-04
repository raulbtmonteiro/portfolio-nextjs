import styled from "styled-components";

export const AboutMeContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark200};
`;

export const AboutMeWrapper = styled.div`
  max-width: 1170px;
  padding: 100px 0;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1170px) {
    padding: 100px 24px;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 100%;
    padding: 40px 24px;
  }
`;

export const AboutMeImg = styled.img`
  width: 367px;
  max-width: 90%;

  border-left: 4px solid ${(props) => props.theme.colors.blue};
  border-radius: 4px 0px 0px 4px;

  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const AboutMeTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2em;
  text-transform: uppercase;

  margin-bottom: 1.67em;

  color: ${(props) => props.theme.colors.light};

  @media screen and (max-width: 720px) {
    margin-bottom: 0.67em;
  }
`;

export const AboutMeLocation = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2em;

  margin-bottom: 1em;

  color: ${(props) => props.theme.colors.light};

  @media screen and (max-width: 720px) {
    font-size: 16px;
    margin-bottom: 0.5em;
  }
`;

export const AboutMeDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.78em;

  max-width: 530px;
  margin-bottom: 2.22em;

  color: ${(props) => props.theme.colors.grayLight};

  @media screen and (max-width: 720px) {
    font-size: 14px;
    line-height: 1.43em;
  }
`;

export const SocialMediaList = styled.div`
  display: flex;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;
