import { dark } from "../../themes/dark";
import {
  MainContainer,
  MainWrapper,
  MainInfo,
  MainDescription,
  MainTitle,
  MainImg,
} from "./style";

export const Main = () => {
  return (
    <MainContainer theme={dark}>
      <MainWrapper>
        <MainInfo>
          <MainDescription>Olá, eu sou</MainDescription>
          <MainTitle>Raul Monteiro</MainTitle>
          <MainDescription>Desenvolvedor font-end</MainDescription>
        </MainInfo>
        <MainImg />
      </MainWrapper>
    </MainContainer>
  );
};
