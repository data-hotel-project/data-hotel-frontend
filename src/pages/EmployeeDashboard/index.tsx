import { useEffect, useState } from "react";
import { StyledNoisy } from "../../components/Background/style";
import { StyledDashboard } from "../GuestDashboard/style";
import { BoxChoice, Container, UlContainer } from "./style";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import { RoomCard } from "../../components/Cards/RoomCard";
import Header from "../../components/Header";
import Input from "../../components/Input";
import { Modal } from "../../components/Modal";
import { useAuth, useHotel } from "../../contexts";
import { iUpdateRoom } from "../../interface";
import { roomSchemaUpdateForm } from "../../validators/roomValidators";

export const EmployeeDashboard = () => {
  const { hotelId } = useAuth();
  const { listRoomsByHotel, rooms } = useHotel();

  const [roomActive, setRoomActive] = useState<boolean>(true);

  useEffect(() => {
    listRoomsByHotel(hotelId);
  }, []);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iUpdateRoom>({
    resolver: zodResolver(roomSchemaUpdateForm),
    // resolver: zodResolver(
    //   roomSchemaUpdateForm.transform((data) => ({
    //     ...data,
    //     number:
    //       typeof data.number === "string" ? Number(data.number) : data.number,
    //   }))
    // ),
  });

  const onSubmit = async (data: iUpdateRoom) => {
    console.log("AAAAAAAA", data);
    console.log("Data before submission:", data);
    console.log("Type of 'number' field:", typeof data.number);
  };

  return (
    <StyledDashboard>
      <StyledNoisy />
      <Header isLogout />

      <BoxChoice $roomActive={roomActive}>
        <h3 onClick={() => setRoomActive(false)}>Clients</h3>
        <h3 onClick={() => setRoomActive(true)}>Rooms</h3>
      </BoxChoice>
      {roomActive ? (
        <Container>
          {/* <BoxAdd>
            <FontAwesomeIcon icon={faSquarePlus} size="2x" />
          </BoxAdd> */}

          <UlContainer>
            {rooms.map((room) => {
              return <RoomCard key={room.id} room={room} />;
            })}

            {/* {Array.from({ length: 20 }, (_, i) => (
              <StyledRoomCard key={i}></StyledRoomCard>
            ))} */}
          </UlContainer>
        </Container>
      ) : (
        <Container>CLIENTS</Container>
      )}
      {/* <Modal title="Update Room">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            id="number"
            label="Number"
            type="number"
            errorMessage={errors.number?.message}
            register={register}
            getValues={getValues}
          />

          <Button size="medium">Save</Button>
        </form>
      </Modal> */}
    </StyledDashboard>
  );
};
