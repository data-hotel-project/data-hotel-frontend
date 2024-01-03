import styled, { css } from "styled-components";
import { iButtonStyledProps } from "../../interface";

export const StyledButton = styled.button<iButtonStyledProps>`
  font-family: var(--font-family-3); // ajustarr
  font-weight: 600;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.4s;

  ${({ $backgroundColor, $fontColor, size, $borderColor }) => css`
    background-color: ${$backgroundColor || "var(--primary-dark-active)"};
    color: ${$fontColor || "var(--primary-light)"};
    font-size: ${size === "big" ? "16px" : size === "medium" ? "14px" : "10px"};
    height: ${size === "big" ? "40px" : size === "medium" ? "35px" : "20px"};
    width: ${size === "big" ? "70px" : size === "medium" ? "85px" : "50px"};
    padding: ${size === "big" ? "7px" : size === "medium" ? "5px" : "3px"};
    border: 1.5px solid ${$borderColor || "var(--secondary-normal)"};
  `}

  &:not(:disabled):hover {
    ${({
      $backgroundColor,
      $fontColor,
      $borderColor,
      $backgroundColorHover,
      $fontColorHover,
      $borderColorHover,
    }) => css`
      background-color: ${$backgroundColorHover || $backgroundColor};
      border: 1px solid ${$borderColorHover || $borderColor};
      color: ${$fontColorHover || $fontColor};

      filter: ${!$borderColorHover &&
      !$backgroundColorHover &&
      "brightness(120%)"};
    `}
  }

  &:disabled {
    background-color: #ced4da;
    color: #ffffff;
    cursor: not-allowed;
  }
`;
