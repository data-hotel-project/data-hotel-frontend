import { api } from "@services/Api";

export const deleteHotelResponse = async (
  hotelId: string | null,
  token: string | null
) => {
  await api.delete(`/hotel/${hotelId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
