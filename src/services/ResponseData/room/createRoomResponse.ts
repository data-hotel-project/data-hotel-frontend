import { api } from "@services/Api";
import { TRoomCreateData } from "@validators/roomValidators";

export const createRoomResponse = async (
  formData: TRoomCreateData,
  token: string | null
) => {
  try {
    await api.post("/room/", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return "Success";
  } catch (error) {
    console.log(error);
  }
};
