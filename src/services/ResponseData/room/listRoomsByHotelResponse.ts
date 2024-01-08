import { iRoomResponse } from "@interface/responseData";
import { api } from "@services/Api";

export const listRoomsByHotelResponse = async (
  hotelId: string | null
): Promise<iRoomResponse[] | undefined> => {
  try {
    const { data } = await api.get<iRoomResponse[]>(
      `/room/?hotel_id=${hotelId}`
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
