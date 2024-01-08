import { iRoom } from "@interface/room";
import { api } from "@services/Api";
import { create } from "zustand";

export interface iStatesProps {
  rooms: iRoom[] | [];
}

export interface iActionProps {
  listRoomsByHotel: (hotelId: string | null) => Promise<void>;
}

interface iRoomStore {
  states: iStatesProps;
  actions: iActionProps;
}

// Tipo 3
export const useRoomStore = create<iRoomStore>((set, get) => ({
  states: {
    rooms: [],
  },
  actions: {
    listRoomsByHotel: async (hotelId: string | null) => {
      try {
        const { data } = await api.get(`/room/?hotel_id=${hotelId}`);

        set({ states: { ...get().states, rooms: data } });
      } catch (error) {
        console.log(error);
      }
    },
  },
}));
