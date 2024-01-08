import {
  createHotelResponse,
  deleteHotelResponse,
  listHotelsResponse,
  retrieveHotelResponse,
  updateHotelResponse,
} from "@services/ResponseData/hotel";
import {
  THotelCreateFormData,
  THotelUpdateFormData,
} from "@validators/hotelValidators";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import { create } from "zustand";
import { iHotelStore } from "./@types";

export const useHotelStore = create<iHotelStore>((set, get) => ({
  states: {
    hotel: null,
    hotels: [],
  },
  actions: {
    createHotel: async (
      formData: THotelCreateFormData,
      token: string | null,
      navigate: NavigateFunction
    ) => {
      try {
        await createHotelResponse(formData, token);

        toast.success("Successful registration");

        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    },

    listHotels: async () => {
      try {
        const data = await listHotelsResponse();

        set({ states: { ...get().states, hotels: data } });
        if (data.length == 1) {
          localStorage.setItem("@DataHotel:hotelID", data[0].id);
        }
      } catch (error) {
        console.log(error);
      }
    },

    retrieveHotel: async (hotelId: string | null) => {
      try {
        const data = await retrieveHotelResponse(hotelId);

        set({ states: { ...get().states, hotel: data } });
      } catch (error) {
        console.log(error);
      }
    },

    updateHotel: async (
      formData: THotelUpdateFormData,
      userId: string | null,
      token: string | null
    ) => {
      try {
        const data = await updateHotelResponse(formData, userId, token);

        set({ states: { ...get().states, hotel: data } });

        await get().actions.listHotels();
      } catch (error) {
        console.log(error);
      }
    },

    deleteHotel: async (hotelId: string, token: string | null) => {
      try {
        deleteHotelResponse(hotelId, token);

        toast.success("Hotel deleted");

        set({ states: { ...get().states, hotel: null } });
      } catch (error) {
        console.log(error);
      }
    },
  },
}));
