import { dark } from "../../themes/dark";
import {
  FooterContainer,
  FooterWrapper,
  Copyright,
  LogoContainer,
  Logo,
} from "./style";

export const Footer = () => {
  return (
    <FooterContainer theme={dark}>
      <FooterWrapper>
        <Copyright theme={dark}>@ 2022 - Iuri Silva</Copyright>
        <LogoContainer>
          <Copyright theme={dark}>Powered by</Copyright>
          <Logo src="/images/iuricode-logo.png" alt="Logo Codelândia" />
        </LogoContainer>
      </FooterWrapper>
    </FooterContainer>
  );
};
