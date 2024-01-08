import { iReservation } from "@interface/reservation";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "@validators/reservationValidators";

export interface iStatesProps {
  reservation: iReservation | null;
  reservations: iReservation[] | [];
}

export interface iActionProps {
  createReservation: (
    formData: TReservationCreateData,
    token: string | null
  ) => Promise<void>;
  listReservations: () => Promise<void>;
  retrieveReservation: (reservationId: string) => Promise<void>;
  updateReservation: (
    formData: TReservationUpdateData,
    reservationId: string,
    token: string | null
  ) => Promise<void>;
  deleteReservation: (
    reservationId: string,
    token: string | null
  ) => Promise<void>;
}

export interface iReservationStore {
  states: iStatesProps;
  actions: iActionProps;
}
