import { z } from "zod";

export const roomSchemaCreateForm = z.object({
  number: z.number(),
  quantity: z.number(),
  status: z.string(),
  daily_rate: z.string(),
  hotel: z.string(),
});

export type TRoomCreateData = z.infer<typeof roomSchemaCreateForm>;

export const roomSchemaUpdateForm = z.object({
  number: z.number(),
  quantity: z.number(),
  status: z.string(),
  departure_date: z.string(),
  guest: z.string(),
  full_url: z.string(),
  full_url2: z.string(),
  full_url3: z.string(),
  full_url4: z.string(),
  full_url5: z.string(),
});

export type TRoomUpdateData = z.infer<typeof roomSchemaUpdateForm>;
