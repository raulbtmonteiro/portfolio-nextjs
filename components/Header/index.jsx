import Link from "next/link";
import { useEffect, useState } from "react";
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

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [componentHigh, setComponentHigh] = useState(371);

  const handleClick = (link) => {
    setIsVisible(!isVisible);
    if (link === "#aboutme") {
      window.scrollTo(0, componentHigh);
    }
  };

  useEffect(() => {
    if (window.innerWidth > 720) {
      setComponentHigh(676);
    } else {
      setComponentHigh(371);
    }
  }, []);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>Portfólio</HeaderTitle>
        <HeaderNavBar isVisible={isVisible}>
          {navItens.map((item) => {
            return (
              <div key={item.link} onClick={() => handleClick(item.link)}>
                <Link href={item.link}>{item.title}</Link>
              </div>
            );
          })}
        </HeaderNavBar>
        <HamburgerMenu onClick={() => setIsVisible(!isVisible)}>
          <XDirection isVisible={isVisible} />
          <Middle isVisible={isVisible} />
          <YDirection isVisible={isVisible} />
        </HamburgerMenu>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

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
