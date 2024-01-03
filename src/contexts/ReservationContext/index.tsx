import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IChildrenProps, iReservation } from "../../interface";
import { api } from "../../server/Api";
import {
  TReservationCreateData,
  TReservationUpdateData,
} from "../../validators/reservationValidators";
import { useAuth } from "../AuthContext";
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
      const response = await api.get("/reservation/");
      setReservations(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveReservation = async () => {
    try {
      const response = await api.get(`/reservation/${reservation?.id}`);
      setReservation(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateReservation = async (formData: TReservationUpdateData) => {
    try {
      const response = await api.patch(
        `/reservation/${reservation?.id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReservation(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReservation = async () => {
    try {
      await api.delete(`/reservation/${reservation?.id}`, {
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
