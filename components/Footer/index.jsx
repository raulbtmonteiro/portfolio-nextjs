import {
  FooterContainer,
  FooterWrapper,
  Copyright,
  LogoContainer,
  Logo,
} from "./style";

export const Footer = ({ theme }) => {
  return (
    <FooterContainer theme={theme}>
      <FooterWrapper>
        <Copyright theme={theme}>@ 2022 - Iuri Silva</Copyright>
        <LogoContainer>
          <Copyright theme={theme}>Powered by</Copyright>
          <Logo src="/images/iuricode-logo.png" alt="Logo Codelândia" />
        </LogoContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};
