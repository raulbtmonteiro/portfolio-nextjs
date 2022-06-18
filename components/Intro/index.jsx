import {
  IntroContainer,
  IntroWrapper,
  IntroDescription,
  IntroTitle,
  IntroButtons,
} from "./styles";
import { LinkButton } from "../LinkButton";
import { ThemeProvider, useTheme } from "styled-components";

export const Intro = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <IntroContainer>
        <IntroWrapper>
          <IntroDescription>Olá, eu sou</IntroDescription>
          <IntroTitle>Raul Monteiro</IntroTitle>
          <IntroDescription>Desenvolvedor front-end</IntroDescription>
          <IntroButtons>
            <LinkButton
              title="Linkedin"
              imgSrc="/images/social_media/linkedin.svg"
              imgAlt="Logo do Linkedin."
              link="https://www.linkedin.com/in/monteiroraul/"
              borderColor1="#9358F7"
              borderColor2="#10D7E2"
            />
            <LinkButton
              title="GitHub"
              imgSrc="/images/social_media/github.svg"
              imgAlt="Logo do GitHub."
              link="https://github.com/raulbtmonteiro"
              borderColor1="#D24074"
              borderColor2="#6518B4"
            />
          </IntroButtons>
        </IntroWrapper>
      </IntroContainer>
    </ThemeProvider>
  );
};
