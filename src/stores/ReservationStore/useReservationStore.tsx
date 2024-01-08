import { api } from "@services/Api";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "@validators/reservationValidators";
import { toast } from "react-toastify";
import { create } from "zustand";
import { iReservationStore } from "./@types";

export const useReservationStore = create<iReservationStore>((set) => ({
  states: {
    reservation: null,
    reservations: [],
  },
  actions: {
    createReservation: async (
      formData: TReservationCreateData,
      token: string | null
    ) => {
      try {
        await api.post("/reservation/", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Revervation successful registration");
      } catch (error) {
        console.log(error);
      }
    },

    listReservations: async () => {
      try {
        const { data } = await api.get("/reservation/");

        set(({ states }) => ({ states: { ...states, reservations: data } }));
      } catch (error) {
        console.log(error);
      }
    },

    retrieveReservation: async (reservationId: string) => {
      try {
        const { data } = await api.get(`/reservation/${reservationId}`);

        set(({ states }) => ({ states: { ...states, reservation: data } }));
      } catch (error) {
        console.log(error);
      }
    },

    updateReservation: async (
      formData: TReservationUpdateData,
      reservationId: string,
      token: string | null
    ) => {
      try {
        const { data } = await api.patch(
          `/reservation/${reservationId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        set(({ states }) => ({ states: { ...states, reservation: data } }));

        // navigate(`/${userId}/dashboard`);
      } catch (error) {
        console.log(error);
      }
    },

    deleteReservation: async (reservationId: string, token: string | null) => {
      try {
        await api.delete(`/reservation/${reservationId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        toast.success("Reservation deleted");

        set(({ states }) => ({ states: { ...states, reservation: null } }));
      } catch (error) {
        console.log(error);
      }
    },
  },
}));
