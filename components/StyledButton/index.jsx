import { ButtonType } from "./style";

function StyledButton(props) {
  return (
    <ButtonType
      theme={props.theme}
      borderColor1={props.borderColor1}
      borderColor2={props.borderColor2}
      href={props.link}
      target="_blank"
      download={props.download}
    >
      <img src={props.imgSrc} alt={props.imgAlt} />
      {props.title}
    </ButtonType>
  );
}

export default StyledButton;
