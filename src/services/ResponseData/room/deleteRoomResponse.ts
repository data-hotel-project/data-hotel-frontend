import { api } from "@services/Api";

export const deleteRoomResponse = async (
  roomId: string | null,
  token: string | null
) => {
  try {
    await api.delete(`/room/${roomId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return "Success";
  } catch (error) {
    console.log(error);
  }
};
