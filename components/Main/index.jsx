import { dark } from "../../themes/dark";
import {
  MainContainer,
  MainWrapper,
  MainDescription,
  MainTitle,
  MainButtons,
} from "./style";
import StyledButton from "../StyledButton";

export const Main = () => {
  return (
    <MainContainer theme={dark}>
      <MainWrapper>
        <MainDescription theme={dark}>Olá, eu sou</MainDescription>
        <MainTitle theme={dark}>Raul Monteiro</MainTitle>
        <MainDescription theme={dark}>Desenvolvedor front-end</MainDescription>
        <MainButtons>
          <StyledButton
            title="Linkedin"
            imgSrc="/images/social_media/linkedin.svg"
            imgAlt="Logo do Linkedin"
            theme={dark}
            link="https://www.linkedin.com/in/monteiroraul/"
          />
          <StyledButton
            title="GitHub"
            imgSrc="/images/social_media/github.svg"
            imgAlt="Logo do GitHub"
            theme={dark}
            link="https://github.com/raulbtmonteiro"
          />
        </MainButtons>
      </MainWrapper>
    </MainContainer>
  );
};
