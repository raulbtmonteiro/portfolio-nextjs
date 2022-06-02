import { dark } from "../../themes/dark";
import { FooterContainer, FooterWrapper, Copyright } from "./style";

export const Footer = () => {
  return (
    <FooterContainer theme={dark}>
      <FooterWrapper>
        <Copyright>2022 - Iuri Silva</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};
