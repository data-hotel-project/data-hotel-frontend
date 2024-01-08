import { iHotel } from "@interface/hotel";
import {
  THotelCreateFormData,
  THotelUpdateFormData,
} from "@validators/hotelValidators";
import { NavigateFunction } from "react-router-dom";

export interface iStatesProps {
  hotel: iHotel | null;
  hotels: iHotel[] | [];
}

export interface iActionProps {
  createHotel: (
    formData: THotelCreateFormData,
    token: string | null,
    navigate: NavigateFunction
  ) => Promise<void>;
  listHotels: () => Promise<void>;
  retrieveHotel: (hotelId: string | null) => Promise<void>;
  updateHotel: (
    formData: THotelUpdateFormData,
    userId: string | null,
    token: string | null,
    navigate: NavigateFunction
  ) => Promise<void>;
  deleteHotel: (hotelId: string, token: string | null) => Promise<void>;
}

export interface iHotelStore {
  states: iStatesProps;
  actions: iActionProps;
}
