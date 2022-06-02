import styled from "styled-components";

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
`;

export const HeaderTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.2em;

  color: ${(props) => props.theme.colors.blue};
`;

export const HeaderNavBar = styled.nav`
  display: flex;
`;

export const NavBarItem = styled.a`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2em;

  margin-left: 66px;
  color: ${(props) => props.theme.colors.grayLight};
`;
