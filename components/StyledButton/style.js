import styled from "styled-components";

export const ButtonType = styled.a`
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
  border-image: linear-gradient(#9358f7, #10d7e2);
  border-image-slice: 1;
  border-radius: 4px;

  img {
    margin-right: 1em;
  }

  @media screen and (max-width: 720px) {
    font-size: 14.2px;
  }
`;
