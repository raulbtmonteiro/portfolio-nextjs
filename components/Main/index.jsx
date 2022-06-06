import {
  MainContainer,
  MainWrapper,
  MainDescription,
  MainTitle,
  MainButtons,
} from "./style";
import StyledButton from "../StyledButton";
import { ThemeProvider, useTheme } from "styled-components";

export const Main = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <MainWrapper>
          <MainDescription>Olá, eu sou</MainDescription>
          <MainTitle>Raul Monteiro</MainTitle>
          <MainDescription>Desenvolvedor front-end</MainDescription>
          <MainButtons>
            <StyledButton
              title="Linkedin"
              imgSrc="/images/social_media/linkedin.svg"
              imgAlt="Logo do Linkedin"
              link="https://www.linkedin.com/in/monteiroraul/"
              borderColor1="#9358F7"
              borderColor2="#10D7E2"
            />
            <StyledButton
              title="GitHub"
              imgSrc="/images/social_media/github.svg"
              imgAlt="Logo do GitHub"
              link="https://github.com/raulbtmonteiro"
              borderColor1="#D24074"
              borderColor2="#6518B4"
            />
          </MainButtons>
        </MainWrapper>
      </MainContainer>
    </ThemeProvider>
  );
};
