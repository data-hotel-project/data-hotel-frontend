import { NavigateFunction } from "react-router-dom";
import { iEmployee, iGuest } from "../../assets/interface";

export interface iAuthProviderData {
  navigate: NavigateFunction;
  user: iEmployee | iGuest | null;
  setUser: React.Dispatch<React.SetStateAction<iEmployee | iGuest | null>>;
  token: string | null;
  userId: string | null;
  hotelId: string | null;
  getLoggedUser: () => Promise<void>;
  userLogout: () => void;
  showModal: string;
  setShowModal: React.Dispatch<React.SetStateAction<string>>;
  closeModal: () => void;
}
