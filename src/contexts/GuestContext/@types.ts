import { NavigateFunction } from "react-router-dom";
import { iGuest } from "../../interface";
import {
  TGuestFormData,
  TGuestUpdateFormData,
} from "../../validators/guestValidators";
import { TAuthLoginData } from "../../validators/authValidators";

export interface IGuestContext {
  navigate: NavigateFunction;
  guest: iGuest | null;
  setGuest: React.Dispatch<React.SetStateAction<iGuest | null>>;
  guests: iGuest[] | null;
  setGuests: React.Dispatch<React.SetStateAction<iGuest[] | null>>;
  loginGuest: (formData: TAuthLoginData) => Promise<void>;
  createGuest: (formData: TGuestFormData) => Promise<void>;
  listGuests: () => Promise<void>;
  retrieveGuest: () => Promise<void>;
  updateGuest: (formData: TGuestUpdateFormData) => Promise<void>;
  deleteGuest: () => Promise<void>;
}
