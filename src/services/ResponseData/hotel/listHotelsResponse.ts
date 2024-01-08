import { iHotelResponse } from "@interface/responseData";
import { api } from "@services/Api";

export const listHotelsResponse = async (): Promise<iHotelResponse[]> => {
  const resp = await api.get<iHotelResponse[]>("/hotel/");

  return resp.data;
};
