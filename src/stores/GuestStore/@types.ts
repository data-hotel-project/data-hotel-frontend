import { iGuest } from "@interface/guest";
import { TAuthLoginData } from "@validators/authValidators";
import {
  TGuestFormData,
  TGuestUpdateFormData,
} from "@validators/guestValidators";

export interface iStatesProps {
  guest: iGuest | null;
  guests: iGuest[] | null;
}

export interface iActionProps {
  loginGuest: (formData: TAuthLoginData) => Promise<void>;
  createGuest: (formData: TGuestFormData) => Promise<void>;
  listGuests: () => Promise<void>;
  retrieveGuest: () => Promise<void>;
  updateGuest: (formData: TGuestUpdateFormData) => Promise<void>;
  deleteGuest: () => Promise<void>;
}

export interface iGuestStore {
  states: iStatesProps;
  actions: iActionProps;
}
