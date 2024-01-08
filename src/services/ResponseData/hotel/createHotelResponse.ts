import { api } from "@services/Api";
import { THotelCreateFormData } from "@validators/hotelValidators";

export const createHotelResponse = async (
  formData: THotelCreateFormData,
  token: string | null
) => {
  await api.post("/hotel/", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
