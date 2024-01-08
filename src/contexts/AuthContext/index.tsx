import { iEmployee } from "@interface/employee";
import { iGuest } from "@interface/guest";
import { IChildrenProps } from "@interface/index";
import { getLoggedUserResponse } from "@services/ResponseData/auth";
import { isAxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iAuthProviderData } from "./@types";

export const AuthContext = createContext<iAuthProviderData>(
  {} as iAuthProviderData
);

export const AuthProvider = ({ children }: IChildrenProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<iEmployee | iGuest | null>(null);

  const token = localStorage.getItem("@DataHotel:TOKEN");
  const hotelId = localStorage.getItem("@DataHotel:hotelID");
  const userId = localStorage.getItem("@DataHotel:userID");

  const [showModal, setShowModal] = useState<string>("");

  const closeModal = () => {
    setShowModal("");
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@DataHotel:hotelID");
    localStorage.removeItem("@DataHotel:TOKEN");
    localStorage.removeItem("@DataHotel:userID");
    navigate("/");
  };

  const getLoggedUser = async () => {
    if (token) {
      try {
        const data = await getLoggedUserResponse(token);

        setUser(data.user);

        if (token && data.user.is_superuser == true) {
          navigate("/adminDashboard");
        } else if (token && data.user.is_staff == true) {
          localStorage.setItem("@DataHotel:hotelID", data.hotel);

          navigate("/employeeDashboard");
        } else if (token && data.user.is_staff == false) {
          navigate("/guestDashboard");
        } else {
          navigate("/");
        }
      } catch (error) {
        console.log(error);
        if (isAxiosError(error)) {
          if (
            error.response?.data.messages[0].message ===
            "Token is invalid or expired"
          ) {
            userLogout();
          }
        }
      }
    }
  };

  useEffect(() => {
    getLoggedUser();
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        navigate,
        user,
        setUser,
        token,
        userId,
        hotelId,
        getLoggedUser,
        userLogout,
        showModal,
        setShowModal,
        closeModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth deve ser usado dentro de um provedor AuthContext");
  }

  return authContext;
};
