import { create } from "zustand";
import { iRoom } from "../../interface";
import { api } from "../../server/Api";

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

        console.log("Function data", get());
      } catch (error) {
        console.log(error);
      }
    },
  },
}));
