import { iRoomResponse } from "@interface/responseData";
import { api } from "@services/Api";

export const listAllRoomsResponse = async (): Promise<
  iRoomResponse[] | undefined
> => {
  try {
    const { data } = await api.get<iRoomResponse[]>("/room/");

    return data;
  } catch (error) {
    console.log(error);
  }
};
