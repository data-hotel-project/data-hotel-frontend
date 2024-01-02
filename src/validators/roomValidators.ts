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
  number: z.coerce.number().optional(),
  quantity: z.coerce.number().optional(),
  status: z.string().optional(),
  departure_date: z.string().optional(),
  guest: z.string().optional(),
  image: z
    .custom((value) => value instanceof FileList, {
      message: "Invalid image files",
    })
    .optional(),
  image2: z.string().optional(),
  image3: z.string().optional(),
  image4: z.string().optional(),
  image5: z.string().optional(),
});

export type TRoomUpdateData = {
  number?: number | undefined;
  quantity?: number | undefined;
  status?: string | undefined;
  departure_date?: string | undefined;
  guest?: string | undefined;
  image?: FileList | undefined;
  image2?: string | undefined;
  image3?: string | undefined;
  image4?: string | undefined;
  image5?: string | undefined;
  [key: string]: number | string | undefined | unknown;
};
