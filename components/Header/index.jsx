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
    title: "Home",
    link: "/",
  },
  {
    title: "Sobre mim",
    link: "/",
  },
  {
    title: "Experiências",
    link: "/",
  },
  {
    title: "Projetos",
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
            return (
              <Link key={item.title} href={item.link}>
                {item.title}
              </Link>
            );
          })}
        </HeaderNavBar>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
