import { ThemeProvider, useTheme } from "styled-components";
import { LinkButton } from "../LinkButton";
import {
  IntroContainer,
  IntroWrapper,
  IntroDescription,
  IntroTitle,
  IntroButtons,
} from "./styles";

export const Intro = ({ data }) => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <IntroContainer>
        <IntroWrapper>
          <IntroDescription>{data.introduction[0].text}</IntroDescription>
          <IntroTitle>{data.name[0].text}</IntroTitle>
          <IntroDescription>{data.occupation[0].text}</IntroDescription>
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
