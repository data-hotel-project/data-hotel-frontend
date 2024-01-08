import { iHotelResponse } from "@interface/responseData";
import { api } from "@services/Api";

export const retrieveHotelResponse = async (
  hotelId: string | null
): Promise<iHotelResponse> => {
  const resp = await api.get<iHotelResponse>(`/hotel/${hotelId}`);

  return resp.data;
};
