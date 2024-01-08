import {
  createRoomResponse,
  deleteRoomResponse,
  listAllRoomsResponse,
  listRoomsByHotelResponse,
  retrieveRoomResponse,
  updateRoomResponse,
} from "@services/ResponseData/room";
import { TRoomCreateData, TRoomUpdateData } from "@validators/roomValidators";
import { toast } from "react-toastify";
import { create } from "zustand";
import { iRoomStore } from "./@types";

export const useRoomStore = create<iRoomStore>((set, get) => ({
  states: {
    room: null,
    rooms: [],
    allRooms: [],
  },
  actions: {
    createRoom: async (formData: TRoomCreateData, token: string) => {
      const result = await createRoomResponse(formData, token);

      if (result) {
        toast.success("Room successful registration");
      }
    },

    listAllRooms: async () => {
      const data = await listAllRoomsResponse();

      if (data) {
        set(({ states }) => ({ states: { ...states, allRooms: data } }));
      }
    },

    listRoomsByHotel: async (hotelId: string | null) => {
      const data = await listRoomsByHotelResponse(hotelId);

      if (data) {
        set({ states: { ...get().states, rooms: data } });
      }
    },

    retrieveRoom: async (roomId: string) => {
      const data = await retrieveRoomResponse(roomId);

      if (data) {
        set(({ states }) => ({ states: { ...states, room: data } }));
      }
    },

    updateRoom: async (
      formData: TRoomUpdateData | FormData,
      roomId: string,
      hotelId: string | null,
      token: string | null
    ) => {
      const data = await updateRoomResponse(formData, roomId, token);

      if (data) {
        set(({ states }) => ({ states: { ...states, room: data } }));

        await get().actions.listRoomsByHotel(hotelId);

        toast.success("Room updated successfully");
      }
    },

    deleteRoom: async (roomId: string, token: string) => {
      const result = await deleteRoomResponse(roomId, token);

      if (result) {
        toast.success("Romm deleted");

        set(({ states }) => ({ states: { ...states, room: null } }));
      }
    },
  },
}));
