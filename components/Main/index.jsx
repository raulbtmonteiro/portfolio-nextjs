import { dark } from "../../themes/dark";
import {
  MainContainer,
  MainWrapper,
  MainInfo,
  MainDescription,
  MainTitle,
} from "./style";

export const Main = () => {
  return (
    <MainContainer theme={dark}>
      <MainWrapper>
        <MainInfo>
          <MainDescription theme={dark}>Olá, eu sou</MainDescription>
          <MainTitle theme={dark}>Raul Monteiro</MainTitle>
          <MainDescription theme={dark}>
            Desenvolvedor front-end
          </MainDescription>
        </MainInfo>
      </MainWrapper>
    </MainContainer>
  );
};
