import styled from "styled-components";
import img from "../../public/images/LooperBG.svg";

export const MainContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  background-image: url({img});
`;

export const MainWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const MainInfo = styled.div``;

export const MainDescription = styled.p`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2em;
  text-transform: uppercase;

  margin-bottom: 0.5em;
  color: ${(props) => props.theme.colors.light};
`;

export const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.2em;
  text-transform: uppercase;

  margin-bottom: 0.2em;
  color: ${(props) => props.theme.colors.blue};
`;
