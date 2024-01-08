import { useAuth } from "@contexts/AuthContext";
import { iGuest } from "@interface/guest";
import { IChildrenProps } from "@interface/index";
import { api } from "@services/Api";
import { TAuthLoginData } from "@validators/authValidators";
import {
  TGuestFormData,
  TGuestUpdateFormData,
} from "@validators/guestValidators";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { IGuestContext } from "./@types";

export const GuestContext = createContext<IGuestContext>({} as IGuestContext);

export const GuestProvider = ({ children }: IChildrenProps) => {
  const { token, userId, navigate, setUser, getLoggedUser } = useAuth();

  const [guest, setGuest] = useState<iGuest | null>(null);
  const [guests, setGuests] = useState<iGuest[] | null>(null);

  const loginGuest = async (formData: TAuthLoginData) => {
    try {
      const { data } = await api.post("/guest/login/", formData);

      setUser(data.user);

      localStorage.setItem("@DataHotel:TOKEN", data.access);
      localStorage.setItem("@DataHotel:userID", data.user.id);

      getLoggedUser();
    } catch (error) {
      console.log(error);
      toast.error("Username or password invalid");
    }
  };

  const createGuest = async (formData: TGuestFormData) => {
    try {
      await api.post("/guest/", formData);

      toast.success("Successful registration");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const listGuests = async () => {
    try {
      const { data } = await api.get("/guest/");
      setGuests(data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveGuest = async () => {
    try {
      const { data } = await api.get(`/guest/${userId}`);

      setGuest(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateGuest = async (formData: TGuestUpdateFormData) => {
    try {
      const { data } = await api.patch(`/guest/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setGuest(data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGuest = async () => {
    try {
      await api.delete(`/guest/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("User deleted");
      setGuest(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GuestContext.Provider
      value={{
        guest,
        setGuest,
        guests,
        setGuests,
        loginGuest,
        createGuest,
        listGuests,
        retrieveGuest,
        updateGuest,
        deleteGuest,
      }}
    >
      {children}
    </GuestContext.Provider>
  );
};

export const useGuest = () => {
  const guestContext = useContext(GuestContext);

  if (!guestContext) {
    throw new Error(
      "useGuest deve ser usado dentro de um provedor GuestContext"
    );
  }

  return guestContext;
};
