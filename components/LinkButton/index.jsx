import { Button } from "./styles";

export const LinkButton = (props) => {
  return (
    <Button
      theme={props.theme}
      borderColor1={props.borderColor1}
      borderColor2={props.borderColor2}
      href={props.link}
      target="_blank"
      download={props.download}
    >
      <img src={props.imgSrc} alt={props.imgAlt} />
      {props.title}
    </Button>
  );
};
