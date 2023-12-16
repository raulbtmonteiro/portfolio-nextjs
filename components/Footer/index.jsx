import {
  FooterContainer,
  FooterWrapper,
  Copyright,
  LogoContainer,
  Logo,
} from "./styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Copyright>© 2022 - Raul Monteiro</Copyright>
        <LogoContainer>
          <Copyright>Powered by</Copyright>
          <a target="_blank" href="https://www.iuricode.com/">
            <Logo src="/images/iuricode-logo.png" alt="Logo Codelândia." />
          </a>
        </LogoContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};
