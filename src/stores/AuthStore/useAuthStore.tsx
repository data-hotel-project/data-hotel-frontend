import { create } from "zustand";

import { iEmployee } from "@interface/employee";
import { iGuest } from "@interface/guest";
import { getLoggedUserResponse } from "@services/ResponseData/auth";
import { isAxiosError } from "axios";
import { iAuthStore } from "./@types";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const useAuthStore = create<iAuthStore>((set, get) => ({
  states: {
    user: null,
    token: localStorage.getItem("@DataHotel:TOKEN"),
    hotelId: localStorage.getItem("@DataHotel:hotelID"),
    userId: localStorage.getItem("@DataHotel:userID"),
    showModal: "",
  },
  actions: {
    setShowModal: (value: string) => {
      set({ states: { ...get().states, showModal: value } });
    },

    setUser: (value: iEmployee | iGuest | null) => {
      set({ states: { ...get().states, user: value } });
    },

    closeModal: () => {
      get().actions.setShowModal("");
    },

    userLogout: (navigate: NavigateFunction) => {
      get().actions.setUser(null);
      localStorage.removeItem("@DataHotel:hotelID");
      localStorage.removeItem("@DataHotel:TOKEN");
      localStorage.removeItem("@DataHotel:userID");
      navigate("/");
    },

    getLoggedUser: async (navigate: NavigateFunction) => {
      const token = get().states.token;

      if (token) {
        try {
          const data = await getLoggedUserResponse(token);

          get().actions.setUser(data.user);

          if (token && data.user.is_superuser == true) {
            navigate("/adminDashboard");
          } else if (token && data.user.is_staff == true) {
            localStorage.setItem("@DataHotel:hotelID", data.hotel);

            navigate("/employeeDashboard");
          } else if (token && data.user.is_staff == false) {
            navigate("/guestDashboard");
          } else {
            navigate("/");
          }
        } catch (error) {
          console.log(error);
          if (isAxiosError(error)) {
            if (
              error.response?.data.messages[0].message ===
              "Token is invalid or expired"
            ) {
              const navigate = useNavigate();

              get().actions.userLogout(navigate);
            }
          }
        }
      }
    },
  },
}));
