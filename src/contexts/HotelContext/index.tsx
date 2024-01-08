import { useAuth } from "@contexts/AuthContext";
import { iHotel } from "@interface/hotel";
import { IChildrenProps } from "@interface/index";
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
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IHotelContext } from "./@types";

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

export const HotelProvider = ({ children }: IChildrenProps) => {
  const [hotel, setHotel] = useState<iHotel | null>(null);
  const [hotels, setHotels] = useState<iHotel[] | []>([]);

  const { token, userId, hotelId, navigate } = useAuth();

  const createHotel = async (formData: THotelCreateFormData) => {
    try {
      await createHotelResponse(formData, token);

      toast.success("Successful registration");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const listHotels = async () => {
    try {
      const data = await listHotelsResponse();

      setHotels(data);
      if (data.length == 1) {
        localStorage.setItem("@DataHotel:hotelID", data[0].id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveHotel = async (hotelId: string | null) => {
    try {
      const data = await retrieveHotelResponse(hotelId);

      setHotel(data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateHotel = async (formData: THotelUpdateFormData) => {
    try {
      const data = await updateHotelResponse(formData, userId, token);

      setHotel(data);
      navigate(`/adminDashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHotel = async (hotelId: string) => {
    try {
      deleteHotelResponse(hotelId, token);

      toast.success("Hotel deleted");
      setHotel(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const execute = async () => {
      await listHotels();

      if (hotelId) {
        await retrieveHotel(hotelId);
      }
    };
    execute();
  }, [token, hotelId]);

  const contextValues = {
    hotel,
    setHotel,
    hotels,
    setHotels,
    createHotel,
    listHotels,
    retrieveHotel,
    updateHotel,
    deleteHotel,
  };

  return (
    <HotelContext.Provider value={contextValues}>
      {children}
    </HotelContext.Provider>
  );
};

export const useHotel = () => {
  const hotelContext = useContext(HotelContext);

  if (!hotelContext) {
    console.error("useHotel deve ser usado dentro de um provedor HotelContext");
  }

  return hotelContext;
};
