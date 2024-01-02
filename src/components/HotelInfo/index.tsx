import { useHotel } from "../../contexts/HotelContext";
import { StyledHotelInfo } from "./style";

const HotelInfo = () => {
  const { hotel } = useHotel();

  return (
    <StyledHotelInfo>
      <img src={hotel?.full_url} alt="img" />
    </StyledHotelInfo>
  );
};

export default HotelInfo;
