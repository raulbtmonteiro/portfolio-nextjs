import Link from "next/link";
import { useState } from "react";
import { dark } from "../../themes/dark";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  HeaderNavBar,
  CloseButton,
  XDirection,
  YDirection,
  HamburgerMenu,
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
  const [isVisible, setIsVisible] = useState(false);

  return (
    <HeaderContainer theme={dark}>
      <HeaderWrapper theme={dark}>
        <HeaderTitle theme={dark}>Portfólio</HeaderTitle>
        <HeaderNavBar theme={dark} isVisible={isVisible}>
          <CloseButton
            isVisible={isVisible}
            onClick={() => setIsVisible(!isVisible)}
          >
            <XDirection theme={dark} />
            <YDirection theme={dark} />
          </CloseButton>
          {navItens.map((item) => {
            return (
              <Link key={item.title} href={item.link}>
                {item.title}
              </Link>
            );
          })}
        </HeaderNavBar>
        <HamburgerMenu theme={dark} onClick={() => setIsVisible(!isVisible)}>
          <div />
          <div />
          <div />
        </HamburgerMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
