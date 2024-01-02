import Header from "../../components/Header";
import { StyledH2, StyledUL } from "./style";
import Background from "../../components/Background";
import { HotelCard } from "../../components/Cards/HotelCard";
import { Modal } from "../../components/Modal";
import HotelInfo from "../../components/HotelInfo";
import { useHotel } from "../../contexts/HotelContext";
import { useAuth } from "../../contexts/AuthContext";

export const Home = () => {
  const { showModal } = useAuth();
  const { hotels, hotel } = useHotel();

  return (
    <>
      {showModal != "" ? (
        <Modal title={hotel?.name}>
          <HotelInfo />
        </Modal>
      ) : null}
      <Background>
        <Header />
        <StyledH2>GRAND DATA HOTEL</StyledH2>
      </Background>
      <StyledUL>
        {hotels?.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </StyledUL>
    </>
  );
};
