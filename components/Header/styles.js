import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;

export const HeaderWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 24px;
  height: 70px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid ${(props) => props.theme.colors.backgroundDark200};

`;

export const HeaderTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2em;

  color: ${(props) => props.theme.colors.blue};

  @media screen and (max-width: 720px) {
    font-size: 18px;
  }
`;

export const HeaderNavBar = styled.nav`
  display: flex;

  a {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.2em;
    text-decoration: none;

    margin-left: 66px;
    color: ${(props) => props.theme.colors.grayLight};

    :hover {
      color: ${(props) => props.theme.colors.light};
    }
  }

  @media screen and (max-width: 720px) {
    opacity: 0;
    transition: 0.5s;
    transform: translateY(50px);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    background-color: ${(props) => props.theme.colors.backgroundDark200};

    a {
      margin-left: 0;
    }

    ${({ isVisible }) =>
      isVisible &&
      css`
        transform: translateY(0);
        opacity: 1;
        z-index: 4;
      `}
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4.05px;

    width: 30px;
    height: 40px;
    z-index: 6;
  }
`;

export const XDirection = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.light};;
  transition: 500ms;
  z-index: 6;

  ${({ isVisible }) =>
    isVisible &&
    css`
      position: relative;
      top: 2.7px;
      width: 35px;
      transform: rotate(45deg);
    `}

`;

export const YDirection = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.light};
  transition: 500ms;
  z-index: 6;

  ${({ isVisible }) =>
    isVisible &&
    css`
      position: relative;
      top: -2.7px;
      width: 35px;
      transform: rotate(-45deg);
    `}

`;

export const Middle = styled.div`
  width: 30px;
  height: 2px;
  background-color: ${(props) => props.theme.colors.light};
  z-index: 6;
  ${({ isVisible }) =>
    isVisible &&
    css`
      display: none;
    `}
`;