import { useEffect } from "react";
import { toast } from "react-toastify";
import { create } from "zustand";
import { useAuth } from "../../contexts/AuthContext";
import { api } from "../../server/Api";
import { TAuthLoginData } from "../../validators/authValidators";
import {
  TEmployeeFormData,
  TEmployeeUpdateFormData,
} from "../../validators/employeeValidators";
import { useRoomStore } from "../RoomStore/useRoomStore";
import { iEmployeeStore } from "./@types";

export const useEmployeeStore = () => {
  const { setUser, token, userId, navigate, hotelId, getLoggedUser } =
    useAuth();

  const {
    actions: { listRoomsByHotel },
  } = useRoomStore();

  useEffect(() => {
    const execute = async () => {
      if (hotelId) {
        await listRoomsByHotel(hotelId);
      }
    };

    execute();
  }, [hotelId]);

  return create<iEmployeeStore>((set) => ({
    states: {
      employee: null,
      employees: [],
    },
    actions: {
      loginEmployee: async (formData: TAuthLoginData) => {
        try {
          const { data } = await api.post("/employee/login/", formData);

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

      createEmployee: async (formData: TEmployeeFormData) => {
        try {
          await api.post("/employee/", formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          toast.success("Successful registration");
          navigate("/login");
        } catch (error) {
          console.log(error);
        }
      },

      listEmployees: async () => {
        try {
          const { data } = await api.get("/employee/");

          set(({ states }) => ({ states: { ...states, employees: data } }));
        } catch (error) {
          console.log(error);
        }
      },

      retrieveEmployee: async () => {
        try {
          const { data } = await api.get(`/employee/${userId}`);
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      },

      updateEmployee: async (formData: TEmployeeUpdateFormData) => {
        try {
          const { data } = await api.patch(`/employee/${userId}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          navigate(`/${userId}/dashboard`);
        } catch (error) {
          console.log(error);
        }
      },

      deleteEmployee: async () => {
        try {
          await api.delete(`/employee/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          toast.success("Fired employee");
          setUser(null);
        } catch (error) {
          console.log(error);
        }
      },
    },
  }));
};
