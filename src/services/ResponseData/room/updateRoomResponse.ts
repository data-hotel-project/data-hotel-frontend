import { iRoomResponse } from "@interface/responseData";
import { api } from "@services/Api";
import { TRoomUpdateData } from "@validators/roomValidators";

export const updateRoomResponse = async (
  formData: TRoomUpdateData | FormData,
  roomId: string,
  token: string | null
): Promise<iRoomResponse | undefined> => {
  try {
    const { data } = await api.patch<iRoomResponse>(
      `/room/${roomId}/`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
