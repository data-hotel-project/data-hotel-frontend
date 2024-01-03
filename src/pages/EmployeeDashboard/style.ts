import styled, { css } from "styled-components";

export const BoxChoice = styled.div<{ $roomActive: boolean }>`
  z-index: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 3px;

  width: 90%;
  height: 30px;

  padding-left: 7px;
  padding-right: 7px;
  margin-top: 8rem;

  h3 {
    border-radius: 1px;
    padding-bottom: 5px;
    width: 70px;
    text-align: center;
    font-size: 11px;

    cursor: pointer;
    transition: 0.3s;

    ${({ $roomActive }) => css`
      border-bottom: 2px solid ${!$roomActive ? "white" : "#858585"};
      color: ${!$roomActive ? "white" : "#858585"};

      &:hover {
        filter: ${$roomActive && "brightness(135%)"};
      }
    `}
  }

  :last-child {
    ${({ $roomActive }) => css`
      color: ${$roomActive ? "white" : "#858585"};
      border-bottom: 2px solid ${$roomActive ? "white" : "#858585"};

      &:hover {
        filter: ${!$roomActive ? "brightness(135%)" : "unset"};
      }
    `}
  }
`;

export const Container = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  width: 90%;
  height: 460px;

  padding-left: 7px;
  padding-right: 7px;
  margin-top: 5px;
  border: 1px solid var(--secondary-normal);
  border-radius: 3px;
`;

export const BoxAdd = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: green;

    &:hover {
      filter: brightness("120%");
    }
  }
`;

export const UlContainer = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: wrap;

  height: 87%;
  width: 97%;
  padding-bottom: 1rem;

  overflow-y: scroll;

  @media (max-width: 386px) {
    justify-content: center;
  }

  @media (min-width: 410px) and (max-width: 449px) {
    padding-left: 10px;
  }

  @media (min-width: 450px) and (max-width: 489px) {
    padding-left: 15px;
  }

  @media (min-width: 490px) and (max-width: 549px) {
    padding-left: 45px;
  }

  @media (min-width: 550px) and (max-width: 595px) {
    padding-left: 55px;
  }

  @media (min-width: 625px) and (max-width: 699px),
    (min-width: 820px) and (max-width: 899px),
    (min-width: 1030px) and (max-width: 1069px),
    (min-width: 1200px) and (max-width: 1279px),
    (min-width: 1380px) {
    padding-left: 30px;
  }

  @media (min-width: 700px) and (max-width: 758px),
    (min-width: 900px) and (max-width: 943px),
    (min-width: 1070px) and (max-width: 1135px),
    (min-width: 1280px) and (max-width: 1330px) {
    padding-left: 50px;
  }
`;
