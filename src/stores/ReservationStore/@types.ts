import { iReservation } from "../../interface";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "../../validators/reservationValidators";

export interface iStatesProps {
  reservation: iReservation | null;
  reservations: iReservation[] | [];
}

export interface iActionProps {
  createReservation: (formData: TReservationCreateData) => Promise<void>;
  listReservations: () => Promise<void>;
  retrieveReservation: (reservationId: string) => Promise<void>;
  updateReservation: (
    formData: TReservationUpdateData,
    reservationId: string
  ) => Promise<void>;
  deleteReservation: (reservationId: string) => Promise<void>;
}

export interface iReservationStore {
  states: iStatesProps;
  actions: iActionProps;
}
