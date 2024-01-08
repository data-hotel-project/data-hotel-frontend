import { iEmployee } from "@interface/employee";
import { iGuest } from "@interface/guest";
import { TAuthLoginData } from "@validators/authValidators";
import {
  TEmployeeFormData,
  TEmployeeUpdateFormData,
} from "@validators/employeeValidators";
import { NavigateFunction } from "react-router-dom";

export interface iStatesProps {
  employee: iEmployee | null;
  employees: iEmployee[] | null;
}

export interface iActionProps {
  loginEmployee: (
    formData: TAuthLoginData,
    setUser: (value: iEmployee | iGuest | null) => void,
    getLoggedUser: (navigate: NavigateFunction) => Promise<void>,
    navigate: NavigateFunction
  ) => Promise<void>;
  createEmployee: (
    formData: TEmployeeFormData,
    navigate: NavigateFunction,
    token: string | null
  ) => Promise<void>;
  listEmployees: () => Promise<void>;
  retrieveEmployee: (
    userId: string,
    setUser: React.Dispatch<React.SetStateAction<iGuest | iEmployee | null>>
  ) => Promise<void>;
  updateEmployee: (
    formData: TEmployeeUpdateFormData,
    userId: string,
    setUser: React.Dispatch<React.SetStateAction<iGuest | iEmployee | null>>,
    token: string | null
  ) => Promise<void>;
  deleteEmployee: (
    userId: string,
    token: string | null,
    setUser: React.Dispatch<React.SetStateAction<iGuest | iEmployee | null>>
  ) => Promise<void>;
}

export interface iEmployeeStore {
  states: iStatesProps;
  actions: iActionProps;
}
