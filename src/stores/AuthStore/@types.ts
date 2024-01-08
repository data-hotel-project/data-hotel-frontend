import { iEmployee } from "@interface/employee";
import { iGuest } from "@interface/guest";
import { NavigateFunction } from "react-router-dom";

export interface iStatesProps {
  user: iEmployee | iGuest | null;
  token: string | null;
  userId: string | null;
  hotelId: string | null;
  showModal: string;
}

export interface iActionProps {
  getLoggedUser: (navigate: NavigateFunction) => Promise<void>;
  userLogout: (navigate: NavigateFunction) => void;
  closeModal: () => void;
  setShowModal: (value: string) => void;
  setUser: (value: iEmployee | iGuest | null) => void;
}

export interface iAuthStore {
  states: iStatesProps;
  actions: iActionProps;
}
