import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { iRoom } from "../../../interface";
import Button from "../../Button";
import {
  BoxButtons,
  BoxImage,
  BoxPersons,
  Span,
  SpanStatus,
  StyledRoomCard,
  SubTitle,
} from "./style";
import { useAuth } from "../../../contexts/AuthContext";

interface iRoomCardProps {
  room: iRoom;
  setCurrentRoom: React.Dispatch<React.SetStateAction<iRoom>>;
}

export const RoomCard = ({ room, setCurrentRoom }: iRoomCardProps) => {
  const { setShowModal } = useAuth();

  const handleModalUpdate = () => {
    setCurrentRoom(room);
    setShowModal("updateRoom");
  };

  return (
    <StyledRoomCard>
      <BoxImage>
        <img src={room.full_url} alt="" />
      </BoxImage>
      <SubTitle>
        Number: <Span>{room?.number}</Span>
      </SubTitle>
      <SubTitle>
        Status:
        <SpanStatus $status={room?.status}>{room?.status}</SpanStatus>
      </SubTitle>
      <BoxPersons>
        {Array.from({ length: room.quantity }, (_, i) => (
          <FontAwesomeIcon key={i} icon={faUser} />
        ))}
      </BoxPersons>
      <BoxButtons>
        <Button
          size="small"
          borderColor="#bdbd23d6"
          onClick={handleModalUpdate}
        >
          Edit
        </Button>
        <Button size="small">View more</Button>
      </BoxButtons>
    </StyledRoomCard>
  );
};
