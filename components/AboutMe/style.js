import styled from "styled-components";

export const AboutMeContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark200};
`;

export const AboutMeWrapper = styled.div`
  max-width: 1170px;
  padding: 100px 0 100px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: space-between;
  align-items: center;
`;

export const AboutMeImg = styled.img`
  max-width: 367px;

  border-left: 4px solid ${(props) => props.theme.colors.blue};
  border-radius: 4px 0px 0px 4px;
`;

export const AboutMeInfo = styled.div``;

export const AboutMeTitle = styled.h2`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2em;
  text-transform: uppercase;

  margin-bottom: 1.67em;

  color: ${(props) => props.theme.colors.light};
`;

export const AboutMeLocation = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2em;

  margin-bottom: 1em;

  color: ${(props) => props.theme.colors.light};
`;

export const AboutMeDescription = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.78em;

  max-width: 530px;
  margin-bottom: 2.22em;

  color: ${(props) => props.theme.colors.grayLight};
`;

export const SocialMediaList = styled.div``;
