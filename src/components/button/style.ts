import styled from "styled-components";
import { iButtonStyledProps } from "../../interface";

export const StyledButton = styled.button <iButtonStyledProps>`
  font-family: var(--font-family-3); // ajustar
  font-weight: 600;
  background-color: ${(props) => props.backgroundColor || "#5126EA"}; // ajustar valor default
  color: ${(props) => props.fontColor || "white"};
  font-size: ${(props) => (props.buttonSize === "big" ? "16px" : "14px")};
  padding: ${(props) =>
    props.buttonSize === "big" ? "12px" : "8px 20px"};
  border-radius: 50%;
  border: 1.5px solid ${(props) => props.borderColor || "transparent"};
  transition: background-color 0.2s;

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.backgroundColorHover || props.backgroundColor};
    border: ${(props) => props.borderColorHover || props.borderColor};
    color: ${(props) => props.fontColorHover || props.fontColor};
    ${(props) =>
      !props.borderColorHover &&
      !props.backgroundColorHover &&
      `filter: brightness(120%);`}
  }

  &:disabled {
    background-color: #ced4da;
    color: #ffffff;
    cursor: not-allowed;
  }
`;
