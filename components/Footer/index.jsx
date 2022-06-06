import {
  FooterContainer,
  FooterWrapper,
  Copyright,
  LogoContainer,
  Logo,
} from "./style";
import { ThemeProvider, useTheme } from "styled-components";

export const Footer = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <FooterContainer>
        <FooterWrapper>
          <Copyright>@ 2022 - Iuri Silva</Copyright>
          <LogoContainer>
            <Copyright>Powered by</Copyright>
            <Logo src="/images/iuricode-logo.png" alt="Logo Codelândia" />
          </LogoContainer>
        </FooterWrapper>
      </FooterContainer>
    </ThemeProvider>
  );
};
