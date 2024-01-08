import { iEmployee } from "@interface/employee";
import { iGuest } from "@interface/guest";
import { TAuthLoginData } from "@validators/authValidators";
import {
  TGuestFormData,
  TGuestUpdateFormData,
} from "@validators/guestValidators";
import { NavigateFunction } from "react-router-dom";

export interface iStatesProps {
  guest: iGuest | null;
  guests: iGuest[] | null;
}

export interface iActionProps {
  loginGuest: (
    formData: TAuthLoginData,
    setUser: (value: iEmployee | iGuest | null) => void,
    getLoggedUser: (navigate: NavigateFunction) => Promise<void>,
    navigate: NavigateFunction
  ) => PromiseNavigateFunction;
  createGuest: (
    formData: TGuestFormData,
    navigate: NavigateFunction
  ) => Promise<void>;
  listGuests: () => Promise<void>;
  retrieveGuest: (userId: string) => Promise<void>;
  updateGuest: (
    formData: TGuestUpdateFormData,
    userId: string,
    token: string | null
  ) => Promise<void>;
  deleteGuest: (userId: string, token: string | null) => Promise<void>;
}

export interface iGuestStore {
  states: iStatesProps;
  actions: iActionProps;
}
