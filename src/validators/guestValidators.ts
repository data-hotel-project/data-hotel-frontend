import { z } from "zod";
import {
  addressSchemaForm,
  addressSchemaUpdateForm,
} from "./addressValidators";

export const guestSchemaForm = z
  .object({
    username: z
      .string()
      .refine((value) => value.trim() !== "", "Username is required"),
    email: z
      .string()
      .refine((value) => value.trim() !== "", "Email is required"),
    password: z
      .string()
      .refine((value) => value.trim() !== "", "Password is required"),
    birthdate: z
      .string()
      .refine((value) => value.trim() !== "", "Birthdate is required"),

    nationality: z
      .string()
      .refine((value) => value.trim() !== "", "Nationality is required"),
    contact: z
      .string()
      .refine((value) => value.trim() !== "", "Contact is required"),
    aditional_contact: z.string(),
    emergency_num: z
      .string()
      .refine((value) => value.trim() !== "", "Emergency contact is required"),
    address: addressSchemaForm,
    password_confirmation: z
      .string()
      .refine((value) => value.trim() !== "", "Confirm Password is required"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Senhas não são iguais!",
    path: ["password_confirmation"],
  });

export type TGuestFormData = z.infer<typeof guestSchemaForm>;

export const guestSchemaUpdateForm = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  contact: z.string(),
  emergency_num: z.string(),
  aditional_contact: z.string(),
  address: addressSchemaUpdateForm,
});

export type TGuestUpdateFormData = z.infer<typeof guestSchemaUpdateForm>;
