import { useAuth, useHotel } from "../../../contexts";
// import { iHotel } from "../../../interface";
import { StyledHotelCard } from "./style";

interface iHotelCardProps {
  hotel: iHotel;
}

export const HotelCard = ({ hotel }: iHotelCardProps) => {
  const { setShowModal, user } = useAuth();
  const { deleteHotel, setHotel } = useHotel();

  const handleClick = () => {
    setShowModal(hotel.id);
    setHotel(hotel);
  };

  return (
    <StyledHotelCard onClick={() => handleClick()}>
      <figure>
        <img src={hotel.full_url} alt="Cover" />
      </figure>
      <h3>{hotel.name}</h3>
      <h4>{hotel.address.city}</h4>
      {user?.is_superuser ? (
        <div className="btns">
          <button onClick={() => deleteHotel(hotel.id)}>deletar</button>
        </div>
      ) : null}
    </StyledHotelCard>
  );
};
