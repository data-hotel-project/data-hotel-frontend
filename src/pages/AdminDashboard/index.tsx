import { StyledNoisy } from "@components/Background/style";
import { HotelCard } from "@components/Cards/HotelCard";
import Header from "@components/Header";
import { useAuth } from "@contexts/AuthContext";
import {
  StyledContainer,
  StyledDashboard,
  StyledDashboardH2,
} from "@pages/GuestDashboard/style";
import { useHotelStore } from "@stores/HotelStore/useHotelStore";
import { useEffect } from "react";
import { StyledUL } from "./style";

export const AdminDashboard = () => {
  const { hotelId } = useAuth();

  const [hotels, listHotels, retrieveHotel] = useHotelStore((state) => [
    state.states.hotels,
    state.actions.listHotels,
    state.actions.retrieveHotel,
  ]);

  useEffect(() => {
    const execute = async () => {
      await listHotels();

      if (hotelId) {
        await retrieveHotel(hotelId);
      }
    };
    execute();
  }, []);

  return (
    <StyledDashboard>
      <StyledNoisy />
      <Header isLogout />
      <StyledDashboardH2>ADMIN DASHBOARD</StyledDashboardH2>
      <StyledContainer>
        <StyledUL>
          {hotels?.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </StyledUL>
      </StyledContainer>
    </StyledDashboard>
  );
};
