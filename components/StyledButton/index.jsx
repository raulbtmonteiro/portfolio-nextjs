import { dark } from "../../themes/dark";
import { ButtonType2 } from "./style";

function StyledButton() {
  return (
    <ButtonType2 theme={dark} borderColor1="#9358F7" borderColor2="#10D7E2">
      <img src="/images/social_media/linkedin.svg" alt="logo do linkedin" />
      Linkedin
    </ButtonType2>
  );
}

export default StyledButton;
