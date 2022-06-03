import Link from "next/link";
import { dark } from "../../themes/dark";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  HeaderNavBar,
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
    link: "/",
  },
  {
    titulo: "Projetos",
    link: "/",
  },
];

export const Header = () => {
  return (
    <HeaderContainer theme={dark}>
      <HeaderWrapper theme={dark}>
        <HeaderTitle theme={dark}>Portfólio</HeaderTitle>
        <HeaderNavBar theme={dark}>
          {navItens.map((item) => {
            return <Link href={item.link}>{item.titulo}</Link>;
          })}
        </HeaderNavBar>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
