import { z } from "zod";

export const roomSchemaCreateForm = z.object({
  number: z.number(),
  quantity: z.number(),
  status: z.string(),
  daily_rate: z.string(),
  hotel: z.string(),
});

export type TRoomCreateData = z.infer<typeof roomSchemaCreateForm>;

const isFileList = (value: unknown): value is FileList => {
  return value instanceof FileList;
};

export const roomSchemaUpdateForm = z.object({
  number: z.coerce.number().optional(),
  quantity: z.coerce.number().optional(),
  status: z.string().optional(),
  departure_date: z.string().optional(),
  guest: z.string().optional(),
  image: z.custom(isFileList, { message: "Invalid image files" }).optional(),
  image2: z.custom(isFileList, { message: "Invalid image2 files" }).optional(),
  image3: z.custom(isFileList, { message: "Invalid image3 files" }).optional(),
  image4: z.custom(isFileList, { message: "Invalid image4 files" }).optional(),
  image5: z.custom(isFileList, { message: "Invalid image5 files" }).optional(),
});

export type TRoomUpdateData = {
  number?: number | undefined;
  quantity?: number | undefined;
  status?: string | undefined;
  departure_date?: string | undefined;
  guest?: string | undefined;
  image?: File | undefined;
  image2?: File | undefined;
  image3?: File | undefined;
  image4?: File | undefined;
  image5?: File | undefined;
  [key: string]: number | string | undefined | unknown;
};
