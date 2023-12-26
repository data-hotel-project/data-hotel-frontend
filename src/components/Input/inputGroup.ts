import styled, { css } from "styled-components";
interface iInputGroup {
  className: String;
  $inputValue: string | number;
}
const InputGroup = styled.div<iInputGroup>`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding: 16.5px 14px;

    border: 1px solid var(--secondary-normal);
    background-color: transparent;
    border-radius: 8px;
    font-size: 16px;

    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

    ${({ className }) => css`
      color: ${className === "sucess"
        ? "#FFF"
        : className === "done"
        ? "#1DA1F2"
        : "#14171A"};
    `}
  }

  label {
    position: absolute;
    left: 16px;
    top: 0px;
    pointer-events: none;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

    ${({ $inputValue, className }) => css`
      transform: ${(typeof $inputValue === "string" && $inputValue === "") ||
      (typeof $inputValue === "number" && $inputValue === 0)
        ? "translateY(1rem)"
        : " translateY(-50%) scale(0.8)"};
      background-color: ${(typeof $inputValue === "string" &&
        $inputValue === "") ||
      (typeof $inputValue === "number" && $inputValue === 0)
        ? "transparent"
        : "var(--primary-normal)"};
      padding: ${(typeof $inputValue === "string" && $inputValue !== "") ||
      (typeof $inputValue === "number" && $inputValue !== 0)
        ? "0 0.2em"
        : 0};
      color: ${className === "error"
        ? "#E2142D"
        : className === "sucess"
        ? "#5ea74a"
        : className === "done"
        ? "#1DA1F2"
        : "#dcdcdc"};
    `};
  }

  input:focus {
    outline: none;
  }

  input:focus ~ label {
    transform: translateY(-50%) scale(0.8);
    background-color: var(--primary-normal);
    padding: 0 0.2em;
  }

  .showPass {
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 14px;
    transition: all 0.2s;
    border-radius: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
  }
`;
export default InputGroup;
