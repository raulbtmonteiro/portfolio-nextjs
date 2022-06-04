import { ButtonType } from "./style";

function StyledButton(props) {
  return (
    <ButtonType
      theme={props.theme}
      borderColor1="#9358F7"
      borderColor2="#10D7E2"
    >
      <img src={props.imgSrc} alt={props.imgAlt} />
      {props.title}
    </ButtonType>
  );
}

export default StyledButton;
