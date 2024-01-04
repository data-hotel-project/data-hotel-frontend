import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppProvider from "./contexts";
import RoutesMain from "./routes";

function App() {
  return (
    <>
      <AppProvider>
        <RoutesMain />
      </AppProvider>

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
