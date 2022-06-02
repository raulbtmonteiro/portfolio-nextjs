import styled from "styled-components";

export const AboutMeContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark200};
`;

export const AboutMeWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: space-between;
  align-items: center;
`;

export const AboutMeImg = styled.img`
  max-width: 367px;
`;

export const AboutMeInfo = styled.div``;

export const AboutMeTitle = styled.h2``;

export const AboutMeLocation = styled.p``;

export const AboutMeDescription = styled.p``;

export const SocialMediaList = styled.div``;
