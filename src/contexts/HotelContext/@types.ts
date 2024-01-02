import { NavigateFunction } from "react-router-dom";
import { iHotel, iReservation, iRoom } from "../../assets/interface";
import {
  THotelCreateFormData,
  THotelUpdateFormData,
} from "../../validators/hotelValidators";
import {
  TRoomCreateData,
  TRoomUpdateData,
} from "../../validators/roomValidators";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "../../validators/reservationValidators";

export interface IHotelContext {
  navigate: NavigateFunction;
  hotel: iHotel | null;
  setHotel: React.Dispatch<React.SetStateAction<iHotel | null>>;
  hotels: iHotel[] | [];
  setHotels: React.Dispatch<React.SetStateAction<iHotel[] | []>>;
  room: iRoom | null;
  setRoom: React.Dispatch<React.SetStateAction<iRoom | null>>;
  rooms: iRoom[] | [];
  setRooms: React.Dispatch<React.SetStateAction<iRoom[] | []>>;
  allRooms: iRoom[] | [];
  setAllRooms: React.Dispatch<React.SetStateAction<iRoom[] | []>>;
  reservation: iReservation | null;
  setReservation: React.Dispatch<React.SetStateAction<iReservation | null>>;
  reservations: iReservation[] | [];
  setReservations: React.Dispatch<React.SetStateAction<iReservation[] | []>>;
  createHotel: (formData: THotelCreateFormData) => Promise<void>;
  listHotels: () => Promise<void>;
  retrieveHotel: (hotelId: string | null) => Promise<void>;
  updateHotel: (formData: THotelUpdateFormData) => Promise<void>;
  deleteHotel: (id: string) => Promise<void>;
  createRoom: (formData: TRoomCreateData) => Promise<void>;
  listAllRooms: () => Promise<void>;
  listRoomsByHotel: (hotelId: string | null) => Promise<void>;
  retrieveRoom: (roomId: string) => Promise<void>;
  updateRoom: (
    formData: TRoomUpdateData | FormData,
    roomId: string
  ) => Promise<void>;
  deleteRoom: () => Promise<void>;
  createReservation: (formData: TReservationCreateData) => Promise<void>;
  listReservations: () => Promise<void>;
  retrieveReservation: () => Promise<void>;
  updateReservation: (formData: TReservationUpdateData) => Promise<void>;
  deleteReservation: () => Promise<void>;
}
