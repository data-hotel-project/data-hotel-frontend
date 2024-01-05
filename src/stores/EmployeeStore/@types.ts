import { iEmployee } from "../../interface";
import { TAuthLoginData } from "../../validators/authValidators";
import {
  TEmployeeFormData,
  TEmployeeUpdateFormData,
} from "../../validators/employeeValidators";

export interface iStatesProps {
  employee: iEmployee | null;
  employees: iEmployee[] | null;
}

export interface iActionProps {
  loginEmployee: (formData: TAuthLoginData) => Promise<void>;
  createEmployee: (formData: TEmployeeFormData) => Promise<void>;
  listEmployees: () => Promise<void>;
  retrieveEmployee: () => Promise<void>;
  updateEmployee: (formData: TEmployeeUpdateFormData) => Promise<void>;
  deleteEmployee: () => Promise<void>;
}

export interface iEmployeeStore {
  states: iStatesProps;
  actions: iActionProps;
}
