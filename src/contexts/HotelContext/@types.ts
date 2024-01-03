import { iHotel } from "../../interface";
import {
  THotelCreateFormData,
  THotelUpdateFormData,
} from "../../validators/hotelValidators";

export interface IHotelContext {
  hotel: iHotel | null;
  setHotel: React.Dispatch<React.SetStateAction<iHotel | null>>;
  hotels: iHotel[] | [];
  setHotels: React.Dispatch<React.SetStateAction<iHotel[] | []>>;
  createHotel: (formData: THotelCreateFormData) => Promise<void>;
  listHotels: () => Promise<void>;
  retrieveHotel: (hotelId: string | null) => Promise<void>;
  updateHotel: (formData: THotelUpdateFormData) => Promise<void>;
  deleteHotel: (id: string) => Promise<void>;
}
