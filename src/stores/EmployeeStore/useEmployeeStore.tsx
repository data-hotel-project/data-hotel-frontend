import { iEmployee } from "@interface/employee";
import { iGuest } from "@interface/guest";
import { api } from "@services/Api";
import { TAuthLoginData } from "@validators/authValidators";
import {
  TEmployeeFormData,
  TEmployeeUpdateFormData,
} from "@validators/employeeValidators";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { create } from "zustand";
import { iEmployeeStore } from "./@types";

export const useEmployeeStore = create<iEmployeeStore>((set) => ({
  states: {
    employee: null,
    employees: [],
  },
  actions: {
    loginEmployee: async (
      formData: TAuthLoginData,
      setUser: (value: iEmployee | iGuest | null) => void,
      getLoggedUser: (navigate: NavigateFunction) => Promise<void>,
      navigate: NavigateFunction
    ) => {
      try {
        const { data } = await api.post("/employee/login/", formData);

        setUser(data.user);

        localStorage.setItem("@DataHotel:TOKEN", data.access);
        localStorage.setItem("@DataHotel:userID", data.user.id);

        toast.success("Login successfully");
        getLoggedUser(navigate);
      } catch (error) {
        console.log(error);
        toast.error("Username or password invalid");
      }
    },

    createEmployee: async (
      formData: TEmployeeFormData,
      navigate: NavigateFunction,
      token: string | null
    ) => {
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

    retrieveEmployee: async (
      userId: string,
      setUser: React.Dispatch<React.SetStateAction<iGuest | iEmployee | null>>
    ) => {
      try {
        const { data } = await api.get(`/employee/${userId}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    },

    updateEmployee: async (
      formData: TEmployeeUpdateFormData,
      userId: string,
      setUser: React.Dispatch<React.SetStateAction<iGuest | iEmployee | null>>,
      token: string | null
    ) => {
      try {
        const { data } = await api.patch(`/employee/${userId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);

        // navigate(`/${userId}/dashboard`);
      } catch (error) {
        console.log(error);
      }
    },

    deleteEmployee: async (
      userId: string,
      token: string | null,
      setUser: React.Dispatch<React.SetStateAction<iGuest | iEmployee | null>>
    ) => {
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
