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
              <div key={item.title} onClick={() => setIsVisible(!isVisible)}>
                <Link href={item.link}>{item.title}</Link>
              </div>
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
