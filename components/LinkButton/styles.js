import styled from "styled-components";

export const Button = styled.a.attrs((props) => ({
  color1: props.borderColor1,
  color2: props.borderColor2,
}))`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2em;
  color: ${(props) => props.theme.colors.light};
  text-decoration: none;

  height: 2.8em;
  width: 10em;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: 2px solid transparent;
  border-image: linear-gradient(
    -45deg,
    ${(props) => props.color1},
    ${(props) => props.color2}
  );
  border-image-slice: 1;
  border-radius: 4px;
  transition: 0.5s;

  img {
    margin-right: 1em;
    width: 24px;
    height: 24px;
  }

  :hover {
    background-color: rgba(255, 255, 255, 0.05);
    border-image: linear-gradient(
      45deg,
      ${(props) => props.color1},
      ${(props) => props.color2}
    );
    border-image-slice: 1;
  }

  @media screen and (max-width: 720px) {
    font-size: 14.2px;
  }
`;
