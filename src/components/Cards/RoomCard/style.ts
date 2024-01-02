import styled from "styled-components";

export const StyledRoomCard = styled.li`
  cursor: pointer;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 5px;

  height: 160px;
  width: 150px;

  padding: 10px;
  border: 1px solid var(--secondary-normal);
  border-radius: 5px;
  background-color: #151515;

  .boxModal {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const BoxImage = styled.figure`
  display: flex;
  width: 128px;
  height: 67px;
  min-height: 67px;

  border-radius: 5px;

  img {
    border-radius: 4px;
    width: 100%;
  }
`;

export const SubTitle = styled.h3`
  display: flex;
  align-items: center;
  gap: 3px;

  color: #dcdcdc;
  padding-left: 4px;
  font-size: 11px;
`;

export const Span = styled.span`
  font-size: 10px;
  color: #bfbfbf;
`;

export const SpanStatus = styled.span<{ $status: string }>`
  font-size: 10px;
  color: ${({ $status }) =>
    $status === "Free"
      ? "var(--btn-add)"
      : $status === "Occupied"
      ? "var(--alert-1)"
      : $status === "Under maintenance"
      ? "var(--btn-edit)"
      : $status === "Cleaning" && "blue"};
`;

export const BoxPersons = styled.div`
  display: flex;
  height: 10px;
  gap: 3px;
  padding-left: 4px;

  svg {
    font-size: 10px;
    color: #dcdcdc;
  }
`;

export const BoxButtons = styled.div`
  display: flex;
  gap: 3px;
  justify-content: space-around;
  width: 98%;

  margin-top: 4px;
  padding-left: 4px;

  :last-child {
    padding: 0;
    /* font-size: 8.5px; */
    font-size: 9.5px;
  }

  button {
    width: 57px;
  }
`;
