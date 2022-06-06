import Link from "next/link";
import { useState } from "react";
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
    link: "#sobremim",
  },
  {
    title: "Experiências",
    link: "#experiences",
  },
  {
    title: "Projetos",
    link: "#projects",
  },
];

export const Header = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <HeaderContainer theme={theme}>
      <HeaderWrapper theme={theme}>
        <HeaderTitle theme={theme}>Portfólio</HeaderTitle>
        <HeaderNavBar theme={theme} isVisible={isVisible}>
          <CloseButton
            isVisible={isVisible}
            onClick={() => setIsVisible(!isVisible)}
          >
            <XDirection theme={theme} />
            <YDirection theme={theme} />
          </CloseButton>
          {navItens.map((item) => {
            return (
              <div key={item.title} onClick={() => setIsVisible(!isVisible)}>
                <Link href={item.link}>{item.title}</Link>
              </div>
            );
          })}
        </HeaderNavBar>
        <HamburgerMenu theme={theme} onClick={() => setIsVisible(!isVisible)}>
          <div />
          <div />
          <div />
        </HamburgerMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
