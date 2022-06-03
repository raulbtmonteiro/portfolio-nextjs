import styled from "styled-components";

export const MainContainer = styled.section`
  background-color: ${(props) => props.theme.colors.backgroundDark};
  background-image: url("/images/LooperBG.svg");
  background-repeat: no-repeat;
  background-position: right;
`;

export const MainWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 152px 0 200px;

  display: grid;
  grid-template-columns: 100%;
  justify-content: space-between;
  align-items: center;
`;

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

export const MainButtons = styled.div`
  margin-top: 48px;
  display: flex;
  gap: 24px;
`;

export const ButtonType = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2em;
  color: ${(props) => props.theme.colors.light};

  height: 2.8em;
  width: 10em;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: 2px solid transparent;
  border-image: linear-gradient(#d24074, #6518b4);
  border-image-slice: 1;
  border-radius: 4px;

  img {
    margin-right: 1em;
  }
`;
