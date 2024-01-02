import { z } from "zod";
import {
  addressSchemaForm,
  addressSchemaUpdateForm,
} from "./addressValidators";

export const employeeSchemaForm = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  birthdate: z.string(),
  nationality: z.string(),
  contact: z.string(),
  emergency_num: z.string(),
  aditional_contact: z.string(),
  job_function: z.string(),
  is_working: z.string(),
  address: addressSchemaForm,
  hotel: z.string(),
});

export type TEmployeeFormData = z.infer<typeof employeeSchemaForm>;

export const employeeSchemaUpdateForm = z
  .object({
    username: z.string(),
    email: z.string(),
    password: z.string(),
    contact: z.string(),
    emergency_num: z.string(),
    aditional_contact: z.string(),
    job_function: z.string(),
    is_working: z.string(),
    address: addressSchemaUpdateForm,
    hotel: z.string(),
    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Senhas não são iguais!",
    path: ["password_confirmation"],
  });

export type TEmployeeUpdateFormData = z.infer<typeof employeeSchemaUpdateForm>;
