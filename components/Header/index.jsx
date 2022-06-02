import Link from "next/link";
import { dark } from "../../themes/dark";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  HeaderNavBar,
  NavBarItem,
} from "./style";

const navItens = [
  {
    titulo: "Home",
    link: "/",
  },
  {
    titulo: "Sobre mim",
    link: "/",
  },
  {
    titulo: "Esperiências",
    link: "/formacao",
  },
  {
    titulo: "Projetos",
    link: "/projetos",
  },
];

export const Header = () => {
  return (
    <HeaderContainer theme={dark}>
      <HeaderWrapper theme={dark}>
        <HeaderTitle theme={dark}>Portfólio</HeaderTitle>
        <HeaderNavBar>
          <NavBarItem theme={dark}>Home</NavBarItem>
          <NavBarItem theme={dark}>Sobre mim</NavBarItem>
          <NavBarItem theme={dark}>Experiências</NavBarItem>
          <NavBarItem theme={dark}>Projetos</NavBarItem>
        </HeaderNavBar>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
