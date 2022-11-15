import styled from "styled-components";

export const IntroContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  background-image: url("/images/LooperBG.svg");
  background-repeat: no-repeat;
  background-position: right;

  @media screen and (max-width: 720px) {
    background-image: none;
  }
`;

export const IntroWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 152px 24px 200px 24px;

  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 720px) {
    padding: 50px 24px 55px 24px;
  }
`;

export const IntroDescription = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2em;
  text-transform: uppercase;

  margin-bottom: 0.5em;
  color: ${(props) => props.theme.colors.light};

  @media screen and (max-width: 720px) {
    font-size: 16px;
    line-height: 1.5em;
  }
`;

export const IntroTitle = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2em;
  text-transform: uppercase;

  margin-bottom: 0.2em;
  color: ${(props) => props.theme.colors.blue};

  @media screen and (max-width: 720px) {
    font-size: 32px;
  }
`;

export const IntroButtons = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 24px;
`;
