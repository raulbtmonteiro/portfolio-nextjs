import { Button } from "./styles";

export const LinkButton = ({
  theme,
  borderColor1,
  borderColor2,
  link,
  download,
  imgSrc,
  title,
}) => {
  return (
    <Button
      theme={theme}
      borderColor1={borderColor1}
      borderColor2={borderColor2}
      href={link}
      target="_blank"
      download={download}
    >
      <img src={imgSrc} aria-hidden loading="lazy" />
      {title}
    </Button>
  );
};
