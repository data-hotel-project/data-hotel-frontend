import { iLoggedUserResponse } from "@interface/responseData";
import { api } from "./Api";

export const getLoggedUserResponse = async (
  token: string
): Promise<iLoggedUserResponse> => {
  const resp = await api.get<iLoggedUserResponse>("/logged", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return resp.data;
};
