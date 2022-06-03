import { dark } from "../../themes/dark";
import {
  MainContainer,
  MainWrapper,
  MainDescription,
  MainTitle,
  MainButtons,
  ButtonType,
} from "./style";

export const Main = () => {
  return (
    <MainContainer theme={dark}>
      <MainWrapper>
        <MainDescription theme={dark}>Olá, eu sou</MainDescription>
        <MainTitle theme={dark}>Raul Monteiro</MainTitle>
        <MainDescription theme={dark}>Desenvolvedor front-end</MainDescription>
        <MainButtons>
          <ButtonType theme={dark}>
            <img
              src="/images/social_media/linkedin.svg"
              alt="logo do linkedin"
            />
            Linkedin
          </ButtonType>
          <ButtonType theme={dark}>
            <img src="/images/social_media/github.svg" alt="logo do GitHub" />
            GitHub
          </ButtonType>
        </MainButtons>
      </MainWrapper>
    </MainContainer>
  );
};
