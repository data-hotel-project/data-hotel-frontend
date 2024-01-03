import {
  TEmployeeFormData,
  TEmployeeUpdateFormData,
} from "../../validators/employeeValidators";
import { iEmployee } from "../../interface";
import { TAuthLoginData } from "../../validators/authValidators";

export interface IEmployeeContext {
  employee: iEmployee | null;
  setEmployee: React.Dispatch<React.SetStateAction<iEmployee | null>>;
  employees: iEmployee[] | null;
  setEmployees: React.Dispatch<React.SetStateAction<iEmployee[] | null>>;
  loginEmployee: (formData: TAuthLoginData) => Promise<void>;
  createEmployee: (formData: TEmployeeFormData) => Promise<void>;
  listEmployees: () => Promise<void>;
  retrieveEmployee: () => Promise<void>;
  updateEmployee: (formData: TEmployeeUpdateFormData) => Promise<void>;
  deleteEmployee: () => Promise<void>;
}
