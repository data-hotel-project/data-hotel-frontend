import { iReservation } from "../../interface";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "../../validators/reservationValidators";

export interface iReservationContext {
  reservation: iReservation | null;
  setReservation: React.Dispatch<React.SetStateAction<iReservation | null>>;
  reservations: iReservation[] | [];
  setReservations: React.Dispatch<React.SetStateAction<iReservation[] | []>>;
  createReservation: (formData: TReservationCreateData) => Promise<void>;
  listReservations: () => Promise<void>;
  retrieveReservation: () => Promise<void>;
  updateReservation: (formData: TReservationUpdateData) => Promise<void>;
  deleteReservation: () => Promise<void>;
}
