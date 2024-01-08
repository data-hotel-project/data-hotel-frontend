import { useAuth } from "@contexts/AuthContext";
import { useRoom } from "@contexts/RoomContext";
import { api } from "@services/Api";
import { TRoomCreateData, TRoomUpdateData } from "@validators/roomValidators";
import { toast } from "react-toastify";
import { create } from "zustand";
import { iRoomStore } from "./@types";

export const useRoomStore = () => {
  const { token, hotelId, navigate } = useAuth();
  const { listRoomsByHotel } = useRoom();

  const createStore = create<iRoomStore>((set, get) => ({
    states: {
      room: null,
      rooms: [],
      allRooms: [],
    },
    actions: {
      createRoom: async (formData: TRoomCreateData) => {
        try {
          await api.post("/room/", formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          toast.success("Room successful registration");
        } catch (error) {
          console.log(error);
        }
      },

      listAllRooms: async () => {
        try {
          const { data } = await api.get("/room/");

          set(({ states }) => ({ states: { ...states, allRooms: data } }));
        } catch (error) {
          console.log(error);
        }
      },

      listRoomsByHotel: async (hotelId: string | null) => {
        try {
          const { data } = await api.get(`/room/?hotel_id=${hotelId}`);

          set({ states: { ...get().states, rooms: data } });
        } catch (error) {
          console.log(error);
        }
      },

      retrieveRoom: async (roomId: string) => {
        try {
          const { data } = await api.get(`/room/${roomId}`);

          set(({ states }) => ({ states: { ...states, room: data } }));
        } catch (error) {
          console.log(error);
        }
      },

      updateRoom: async (
        formData: TRoomUpdateData | FormData,
        roomId: string
      ) => {
        try {
          const { data } = await api.patch(`/room/${roomId}/`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          set(({ states }) => ({ states: { ...states, room: data } }));

          await listRoomsByHotel(hotelId);

          toast.success("Room updated successfully");
          navigate(`/employeeDashboard`);
        } catch (error) {
          console.log(error);
        }
      },

      deleteRoom: async (roomId: string) => {
        try {
          await api.delete(`/room/${roomId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          toast.success("Romm deleted");

          set(({ states }) => ({ states: { ...states, room: null } }));
        } catch (error) {
          console.log(error);
        }
      },
    },
  }));

  // Tipo 1
  // const store = createStore();

  // return store;

  // Tipo 2
  return createStore;
};
