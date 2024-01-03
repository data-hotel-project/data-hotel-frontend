import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IChildrenProps, iHotel } from "../../interface";
import { api } from "../../server/Api";
import {
  THotelCreateFormData,
  THotelUpdateFormData,
} from "../../validators/hotelValidators";
import { useAuth } from "../AuthContext";
import { IHotelContext } from "./@types";

export const HotelContext = createContext<IHotelContext>({} as IHotelContext);

export const HotelProvider = ({ children }: IChildrenProps) => {
  const [hotel, setHotel] = useState<iHotel | null>(null);
  const [hotels, setHotels] = useState<iHotel[] | []>([]);

  const { token, userId, hotelId, navigate } = useAuth();

  const createHotel = async (formData: THotelCreateFormData) => {
    try {
      await api.post("/hotel/", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Successful registration");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const listHotels = async () => {
    try {
      const response = await api.get("/hotel/");
      setHotels(response.data);
      if (response.data.length == 1) {
        localStorage.setItem("@DataHotel:hotelID", response.data[0].id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveHotel = async (hotelId: string | null) => {
    try {
      const response = await api.get(`/hotel/${hotelId}`);
      setHotel(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateHotel = async (formData: THotelUpdateFormData) => {
    try {
      const response = await api.patch(`/hotel/${userId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setHotel(response.data);
      navigate(`/adminDashboard`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHotel = async (id: string) => {
    try {
      await api.delete(`/hotel/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("User deleted");
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
