import Background from "@components/Background";
import { HotelCard } from "@components/Cards/HotelCard";
import Header from "@components/Header";
import HotelInfo from "@components/HotelInfo";
import { Modal } from "@components/Modal";
import { useAuth } from "@contexts/AuthContext";
import { useHotel } from "@contexts/HotelContext";
import { StyledH2, StyledUL } from "./style";

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
