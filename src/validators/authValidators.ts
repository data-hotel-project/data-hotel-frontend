import { z } from "zod";

export const authSchemaLogin = z.object({
  username: z
    .string()
    .refine((value) => value.trim() !== "", "Username is required"),
  password: z
    .string()
    .refine((value) => value.trim() !== "", "Password is required"),
});

export type TAuthLoginData = z.infer<typeof authSchemaLogin>;
