import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import { HotelProvider } from "./contexts/HotelContext";
import { EmployeeProvider } from "./contexts/EmployeeContext";
import { GuestProvider } from "./contexts/GuestContext";
import RoutesMain from "./routes";

function App() {
  return (
    <>
      <AuthProvider>
        <HotelProvider>
          <EmployeeProvider>
            <GuestProvider>
              <RoutesMain />
            </GuestProvider>
          </EmployeeProvider>
        </HotelProvider>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
