import { iHotelResponse } from "@interface/responseData";
import { api } from "@services/Api";
import { THotelCreateFormData } from "@validators/hotelValidators";

export const updateHotelResponse = async (
  formData: THotelCreateFormData,
  userId: string | null,
  token: string | null
): Promise<iHotelResponse> => {
  const resp = await api.patch<iHotelResponse>(`/hotel/${userId}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
};
