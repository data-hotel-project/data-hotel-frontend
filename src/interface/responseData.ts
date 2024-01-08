import { iAddress } from "./address";
import { iEmployee } from "./employee";

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
