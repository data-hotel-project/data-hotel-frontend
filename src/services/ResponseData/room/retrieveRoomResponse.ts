import { iRoomResponse } from "@interface/responseData";
import { api } from "@services/Api";

export const retrieveRoomResponse = async (
  roomId: string | null
): Promise<iRoomResponse | undefined> => {
  try {
    const { data } = await api.get<iRoomResponse>(`/room/${roomId}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
