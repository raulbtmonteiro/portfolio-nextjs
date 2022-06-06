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
import { ThemeProvider, useTheme } from "styled-components";

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

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderTitle>Portfólio</HeaderTitle>
          <HeaderNavBar isVisible={isVisible}>
            <CloseButton
              isVisible={isVisible}
              onClick={() => setIsVisible(!isVisible)}
            >
              <XDirection />
              <YDirection />
            </CloseButton>
            {navItens.map((item) => {
              return (
                <div key={item.title} onClick={() => setIsVisible(!isVisible)}>
                  <Link href={item.link}>{item.title}</Link>
                </div>
              );
            })}
          </HeaderNavBar>
          <HamburgerMenu onClick={() => setIsVisible(!isVisible)}>
            <div />
            <div />
            <div />
          </HamburgerMenu>
        </HeaderWrapper>
      </HeaderContainer>
    </ThemeProvider>
  );
};
