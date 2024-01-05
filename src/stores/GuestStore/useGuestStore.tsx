import { toast } from "react-toastify";
import { create } from "zustand";
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../server/Api";
import { TAuthLoginData } from "../../validators/authValidators";
import {
  TGuestFormData,
  TGuestUpdateFormData,
} from "../../validators/guestValidators";
import { iGuestStore } from "./@types";

export const useGuestStore = () => {
  const { token, userId, navigate, setUser, getLoggedUser } = useAuth();

  return create<iGuestStore>((set) => ({
    states: {
      guest: null,
      guests: [],
    },
    actions: {
      loginGuest: async (formData: TAuthLoginData) => {
        try {
          const { data } = await api.post("/guest/login/", formData);

          setUser(data.user);

          localStorage.setItem("@DataHotel:TOKEN", data.access);
          localStorage.setItem("@DataHotel:userID", data.user.id);

          toast.success("Login successfully");
          getLoggedUser();
        } catch (error) {
          console.log(error);
          toast.error("Username or password invalid");
        }
      },

      createGuest: async (formData: TGuestFormData) => {
        try {
          await api.post("/guest/", formData);

          toast.success("Successful registration");
          navigate("/login");
        } catch (error) {
          console.log(error);
        }
      },

      listGuests: async () => {
        try {
          const { data } = await api.get("/guest/");

          set(({ states }) => ({ states: { ...states, guests: data } }));
        } catch (error) {
          console.log(error);
        }
      },

      retrieveGuest: async () => {
        try {
          const { data } = await api.get(`/guest/${userId}`);

          set(({ states }) => ({ states: { ...states, guest: data } }));
        } catch (error) {
          console.log(error);
        }
      },

      updateGuest: async (formData: TGuestUpdateFormData) => {
        try {
          const { data } = await api.patch(`/guest/${userId}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          set(({ states }) => ({ states: { ...states, guest: data } }));

          navigate(`/${userId}/dashboard`);
        } catch (error) {
          console.log(error);
        }
      },

      deleteGuest: async () => {
        try {
          await api.delete(`/guest/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          toast.success("User deleted");

          set(({ states }) => ({ states: { ...states, guest: null } }));
        } catch (error) {
          console.log(error);
        }
      },
    },
  }));
};
