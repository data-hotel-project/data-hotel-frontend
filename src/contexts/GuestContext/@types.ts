import { iGuest } from "@interface/guest";
import { TAuthLoginData } from "@validators/authValidators";
import {
  TGuestFormData,
  TGuestUpdateFormData,
} from "@validators/guestValidators";

export interface IGuestContext {
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
