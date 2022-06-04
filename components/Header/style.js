import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.backgroundDark};
`;

export const HeaderWrapper = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  height: 109px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid ${(props) => props.theme.colors.backgroundDark200};

  @media screen and (max-width: 1170px) {
    padding: 0 24px;
  }

  @media screen and (max-width: 1170px) {
    height: 70px;
  }
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
  }

  @media screen and (max-width: 720px) {
    display: none;
    ${({ visibility }) =>
      visibility &&
      css`
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 36px;
        right: 24px;
        width: 8em;
        z-index: 4;
        background-color: white;
        border-radius: 15px;
      `}
  }
`;
