import { useAuth } from "@contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  const { user } = useAuth();

  return <>{user ? <Outlet /> : <Navigate to={"/"} />}</>;
};
