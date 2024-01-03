import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IChildrenProps, iRoom } from "../../interface";
import { api } from "../../server/Api";
import {
  TRoomCreateData,
  TRoomUpdateData,
} from "../../validators/roomValidators";
import { useAuth } from "../AuthContext";
import { IRoomContext } from "./@types";

export const RoomContext = createContext<IRoomContext>({} as IRoomContext);

export const RoomProvider = ({ children }: IChildrenProps) => {
  const [room, setRoom] = useState<iRoom | null>(null);
  const [rooms, setRooms] = useState<iRoom[] | []>([]);
  const [allRooms, setAllRooms] = useState<iRoom[] | []>([]);

  const { token, hotelId, navigate } = useAuth();

  const createRoom = async (formData: TRoomCreateData) => {
    try {
      await api.post("/room/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Room successful registration");
    } catch (error) {
      console.log(error);
    }
  };

  const listAllRooms = async () => {
    try {
      const response = await api.get("/room/");
      setAllRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listRoomsByHotel = async (hotelId: string | null) => {
    try {
      const response = await api.get(`/room/?hotel_id=${hotelId}`);
      setRooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveRoom = async (roomId: string) => {
    try {
      const response = await api.get(`/room/${roomId}`);
      setRoom(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateRoom = async (
    formData: TRoomUpdateData | FormData,
    roomId: string
  ) => {
    try {
      const response = await api.patch(`/room/${roomId}/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setRoom(response.data);
      await listRoomsByHotel(hotelId);

      toast.success("Room updated successfully");
      navigate(`/employeeDashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom = async () => {
    try {
      await api.delete(`/room/${room?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Romm deleted");
      setRoom(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const execute = async () => {
      if (hotelId) {
        await listRoomsByHotel(hotelId);
      }
    };
    execute();
  }, [token, hotelId]);

  return (
    <RoomContext.Provider
      value={{
        room,
        setRoom,
        rooms,
        setRooms,
        allRooms,
        setAllRooms,
        createRoom,
        listAllRooms,
        listRoomsByHotel,
        retrieveRoom,
        updateRoom,
        deleteRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export const useRoom = () => {
  const roomContext = useContext(RoomContext);

  if (!roomContext) {
    console.error("useRoom deve ser usado dentro de um provedor RoomContext");
  }

  return roomContext;
};
