import { iReservation } from "@interface/reservation";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "@validators/reservationValidators";

export interface iReservationContext {
  reservation: iReservation | null;
  setReservation: React.Dispatch<React.SetStateAction<iReservation | null>>;
  reservations: iReservation[] | [];
  setReservations: React.Dispatch<React.SetStateAction<iReservation[] | []>>;
  createReservation: (formData: TReservationCreateData) => Promise<void>;
  listReservations: () => Promise<void>;
  retrieveReservation: (reservationId: string) => Promise<void>;
  updateReservation: (
    formData: TReservationUpdateData,
    reservationId: string
  ) => Promise<void>;
  deleteReservation: (reservationId: string) => Promise<void>;
}
