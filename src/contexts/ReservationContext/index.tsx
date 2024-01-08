import { useAuth } from "@contexts/AuthContext";
import { IChildrenProps } from "@interface/index";
import { iReservation } from "@interface/reservation";
import { api } from "@services/Api";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "@validators/reservationValidators";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { iReservationContext } from "./@types";

export const ReservationContext = createContext<iReservationContext>(
  {} as iReservationContext
);

export const ReservationProvider = ({ children }: IChildrenProps) => {
  const [reservation, setReservation] = useState<iReservation | null>(null);
  const [reservations, setReservations] = useState<iReservation[] | []>([]);

  const { token, userId, navigate } = useAuth();

  const createReservation = async (formData: TReservationCreateData) => {
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
  };

  const listReservations = async () => {
    try {
      const { data } = await api.get("/reservation/");
      setReservations(data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveReservation = async (reservationId: string) => {
    try {
      const { data } = await api.get(`/reservation/${reservationId}`);
      setReservation(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateReservation = async (
    formData: TReservationUpdateData,
    reservationId: string
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
      setReservation(data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReservation = async (reservationId: string) => {
    try {
      await api.delete(`/reservation/${reservationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Reservation deleted");
      setReservation(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ReservationContext.Provider
      value={{
        reservation,
        setReservation,
        reservations,
        setReservations,
        createReservation,
        listReservations,
        retrieveReservation,
        updateReservation,
        deleteReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const reservationContext = useContext(ReservationContext);

  if (!reservationContext) {
    console.error(
      "useReservation deve ser usado dentro de um provedor ReservationContext"
    );
  }

  return reservationContext;
};
