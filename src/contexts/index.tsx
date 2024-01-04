import { IChildrenProps } from "../interface";
import { AuthProvider } from "./AuthContext";
import { EmployeeProvider } from "./EmployeeContext";
import { GuestProvider } from "./GuestContext";
import { HotelProvider } from "./HotelContext";
import { ReservationProvider } from "./ReservationContext";
import { RoomProvider } from "./RoomContext";

const AppProvider = ({ children }: IChildrenProps) => (
  <AuthProvider>
    <HotelProvider>
      <RoomProvider>
        <EmployeeProvider>
          <GuestProvider>
            <ReservationProvider>{children}</ReservationProvider>
          </GuestProvider>
        </EmployeeProvider>
      </RoomProvider>
    </HotelProvider>
  </AuthProvider>
);

export default AppProvider;
