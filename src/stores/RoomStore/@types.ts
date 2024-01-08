import { iRoom } from "@interface/room";
import { TRoomCreateData, TRoomUpdateData } from "@validators/roomValidators";

export interface iStatesProps {
  room: iRoom | null;
  rooms: iRoom[] | [];
  allRooms: iRoom[] | [];
}

export interface iActionProps {
  createRoom: (formData: TRoomCreateData) => Promise<void>;
  listAllRooms: () => Promise<void>;
  listRoomsByHotel: (hotelId: string | null) => Promise<void>;
  retrieveRoom: (roomId: string) => Promise<void>;
  updateRoom: (
    formData: TRoomUpdateData | FormData,
    roomId: string
  ) => Promise<void>;
  deleteRoom: (roomId: string) => Promise<void>;
}

export interface iRoomStore {
  states: iStatesProps;
  actions: iActionProps;
}
