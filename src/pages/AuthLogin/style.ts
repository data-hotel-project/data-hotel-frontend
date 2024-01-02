import styled, { css, keyframes } from "styled-components";

interface BoxIsEmployeeProps {
  $isEmployee: boolean;
}

export const StyledBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  .name {
    text-align: center;
    margin-bottom: 2rem;
  }

  .box {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    gap: 0.5rem;

    border-radius: 1rem;
    background-color: var(--primary-normal);

    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: var(--primary-light);
    }

    input::placeholder {
    }

    .links {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: var(--primary-light);
    }

    button {
      width: 100%;
      height: 3rem;
      margin-top: 0.5rem;
      border-radius: 0.5rem;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
`;

const openAnimateCondition = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(15px);
  }
`;

const closeAnimateCondition = keyframes`
  0% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const BoxIsEmployee = styled.div<BoxIsEmployeeProps>`
  position: absolute;
  top: 5px;
  right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  max-width: 150px;
  width: 100%;
  height: 20px;
  margin-top: 10px;

  .boxCondition {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 20px;
    width: 40px;
    padding: 2px;
    cursor: pointer;

    border-radius: 20px;
    transition: 0.3s;

    ${({ $isEmployee }) => css`
      background: ${$isEmployee ? "#00800029" : "#ff000029"};
      border: 1px solid ${$isEmployee ? "#008000b0" : "#ff000085"};
    `}

    .condition {
      display: flex;
      height: 16px;
      width: 20px;

      background: white;
      border-radius: 20px;

      ${({ $isEmployee }) => css`
        animation: ${$isEmployee ? openAnimateCondition : closeAnimateCondition}
          0.3s both;
      `}
    }
  }

  h4 {
    font-size: 14px;
  }
`;
