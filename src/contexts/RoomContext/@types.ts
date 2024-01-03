import { iRoom } from "../../interface";
import {
  TRoomCreateData,
  TRoomUpdateData,
} from "../../validators/roomValidators";

export interface IRoomContext {
  room: iRoom | null;
  setRoom: React.Dispatch<React.SetStateAction<iRoom | null>>;
  rooms: iRoom[] | [];
  setRooms: React.Dispatch<React.SetStateAction<iRoom[] | []>>;
  allRooms: iRoom[] | [];
  setAllRooms: React.Dispatch<React.SetStateAction<iRoom[] | []>>;
  createRoom: (formData: TRoomCreateData) => Promise<void>;
  listAllRooms: () => Promise<void>;
  listRoomsByHotel: (hotelId: string | null) => Promise<void>;
  retrieveRoom: (roomId: string) => Promise<void>;
  updateRoom: (
    formData: TRoomUpdateData | FormData,
    roomId: string
  ) => Promise<void>;
  deleteRoom: () => Promise<void>;
}
