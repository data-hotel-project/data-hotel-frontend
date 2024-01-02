import { StyledNoisy } from "../../components/Background/style";
import { HotelCard } from "../../components/Cards/HotelCard";
import Header from "../../components/Header";
import { useHotel } from "../../contexts/HotelContext";
import {
  StyledContainer,
  StyledDashboard,
  StyledDashboardH2,
} from "../GuestDashboard/style";
import { StyledUL } from "../Home/style";

export const AdminDashboard = () => {
  const { hotels } = useHotel();

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
