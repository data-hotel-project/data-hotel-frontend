import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 11;
  border-bottom: none;

  .modal {
    width: 80%;
    max-width: fit-content;
    background-color: #aba9a9;
    padding: 1.5rem;
    border-radius: 8px;
    gap: 2rem;
    display: flex;
    flex-direction: column;
  }

  .header {
    width: 98%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title {
    font-size: 1rem;
    font-weight: 500;
    color: #212529;
  }

  .close {
    color: #232323;
    background-color: #878383;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 1rem;
    border: 0;
    transition: 0.3s;

    &:hover {
      background-color: #676565;
      transition: 0.3s;
    }
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .textModalDelete {
    margin: 20px 0;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .deleteButtonsSection {
    width: 100%;

    display: flex;
    justify-content: flex-end;
    gap: 30px;
  }
`;
