import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IChildrenProps, iEmployee } from "../../interface";
import { api } from "../../server/Api";
import { TAuthLoginData } from "../../validators/authValidators";
import {
  TEmployeeFormData,
  TEmployeeUpdateFormData,
} from "../../validators/employeeValidators";
import { useAuth } from "../AuthContext";
import { useRoom } from "../RoomContext";
import { IEmployeeContext } from "./@types";

export const EmployeeContext = createContext<IEmployeeContext>(
  {} as IEmployeeContext
);

export const EmployeeProvider = ({ children }: IChildrenProps) => {
  const { setUser, token, userId, navigate, hotelId, getLoggedUser } =
    useAuth();
  const { listRoomsByHotel } = useRoom();

  const [employee, setEmployee] = useState<iEmployee | null>(null);
  const [employees, setEmployees] = useState<iEmployee[] | null>(null);

  useEffect(() => {
    const execute = async () => {
      if (hotelId) {
        await listRoomsByHotel(hotelId);
      }
    };

    execute();
  }, [hotelId]);

  const loginEmployee = async (formData: TAuthLoginData) => {
    try {
      const response = await api.post("/employee/login/", formData);
      setUser(response.data.user);

      localStorage.setItem("@DataHotel:TOKEN", response.data.access);
      localStorage.setItem("@DataHotel:userID", response.data.user.id);

      toast.success("Login successfully");
      getLoggedUser();
    } catch (error) {
      console.log(error);
      toast.error("Username or password invalid");
    }
  };

  const createEmployee = async (formData: TEmployeeFormData) => {
    try {
      await api.post("/employee/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Successful registration");
      navigate("login");
    } catch (error) {
      console.log(error);
    }
  };

  const listEmployees = async () => {
    try {
      const response = await api.get("/employee/");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveEmployee = async () => {
    try {
      const response = await api.get(`/employee/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateEmployee = async (formData: TEmployeeUpdateFormData) => {
    try {
      const response = await api.patch(`/employee/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      navigate(`/${userId}/dashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async () => {
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
  };

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        setEmployee,
        employees,
        setEmployees,
        loginEmployee,
        createEmployee,
        listEmployees,
        retrieveEmployee,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployee = () => {
  const employeeContext = useContext(EmployeeContext);

  if (!employeeContext) {
    throw new Error(
      "useEmployee deve ser usado dentro de um provedor EmployeeContext"
    );
  }

  return employeeContext;
};
