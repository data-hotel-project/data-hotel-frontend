import { iAddress } from "./address";
import { iEmployee } from "./employee";
import { iHotel } from "./hotel";
import { iRoom } from "./room";

export interface iAddressResponse extends iAddress {
  created_at: string;
  updated_at: string;
}

export interface iUserLoggedResponse extends iEmployee {
  address: iAddressResponse;
  created_at: string;
  updated_at: string;
}

export interface iLoggedUserResponse {
  hotel: string;
  user: iUserLoggedResponse;
}

export interface iHotelResponse extends Omit<iHotel, "address"> {
  address: iAddressResponse;
  created_at: string;
  updated_at: string;
}

export interface iRoomResponse extends iRoom {
  created_at: string;
  updated_at: string;
}
