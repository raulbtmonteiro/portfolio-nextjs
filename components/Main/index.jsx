import {
  MainContainer,
  MainWrapper,
  MainDescription,
  MainTitle,
  MainButtons,
} from "./style";
import StyledButton from "../StyledButton";

export const Main = ({ theme }) => {
  return (
    <MainContainer theme={theme}>
      <MainWrapper>
        <MainDescription theme={theme}>Olá, eu sou</MainDescription>
        <MainTitle theme={theme}>Raul Monteiro</MainTitle>
        <MainDescription theme={theme}>Desenvolvedor front-end</MainDescription>
        <MainButtons>
          <StyledButton
            title="Linkedin"
            imgSrc="/images/social_media/linkedin.svg"
            imgAlt="Logo do Linkedin"
            theme={theme}
            link="https://www.linkedin.com/in/monteiroraul/"
            borderColor1="#9358F7"
            borderColor2="#10D7E2"
          />
          <StyledButton
            title="GitHub"
            imgSrc="/images/social_media/github.svg"
            imgAlt="Logo do GitHub"
            theme={theme}
            link="https://github.com/raulbtmonteiro"
            borderColor1="#D24074"
            borderColor2="#6518B4"
          />
        </MainButtons>
      </MainWrapper>
    </MainContainer>
  );
};
