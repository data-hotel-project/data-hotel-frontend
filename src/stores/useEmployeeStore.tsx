import { toast } from "react-toastify";
import { create } from "zustand";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../server/Api";
import { iEmployeeStore } from "./@types";

const { setUser, getLoggedUser } = useAuth();

export const useEmployeeStore = create<iEmployeeStore>(() => ({
  states: {
    employee: null,
    employees: [],
  },
  actions: {
    loginEmployee: async (formData) => {
      try {
        const { data } = await api.post("/employee/login/", formData);
        console.log("Zustand Login", data);

        // setUser(data.user);

        // localStorage.setItem("@DataHotel:TOKEN", data.access);
        // localStorage.setItem("@DataHotel:userID", data.user.id);

        // toast.success("Login successfully");
        // getLoggedUser();
      } catch (error) {
        console.log(error);
        toast.error("Username or password invalid");
      }
    },
  },
}));
