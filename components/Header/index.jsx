import Link from "next/link";
import { useState } from "react";
import {
  HeaderContainer,
  HeaderWrapper,
  HeaderTitle,
  HeaderNavBar,
  Middle,
  XDirection,
  YDirection,
  HamburgerMenu,
} from "./styles";
import { ThemeProvider, useTheme } from "styled-components";

const navItens = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Sobre mim",
    link: "#aboutme",
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
            {navItens.map((item) => {
              return (
                <div key={item.title} onClick={() => setIsVisible(!isVisible)}>
                  { item.title == "Sobre mim" 
                  ? <Link href={item.link}>{item.title}</Link>
                  : <Link href={item.link}>{item.title}</Link> }
                </div>
              );
            })}
          </HeaderNavBar>
          <HamburgerMenu onClick={() => setIsVisible(!isVisible)}>
            <XDirection isVisible={isVisible}/>
            <Middle isVisible={isVisible}/>
            <YDirection isVisible={isVisible}/>
          </HamburgerMenu>
        </HeaderWrapper>
      </HeaderContainer>
    </ThemeProvider>
  );
};
