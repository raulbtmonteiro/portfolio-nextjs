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
      <HeaderWrapper>
        <HeaderTitle>Portfólio</HeaderTitle>
        <HeaderNavBar>
          {navItens.map((item) => {
            <li>
              <Link href={item.link}>{item.titulo}</Link>
            </li>;
          })}
        </HeaderNavBar>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
