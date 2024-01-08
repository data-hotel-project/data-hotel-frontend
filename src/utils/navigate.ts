import { useNavigate } from "react-router-dom";

export const navigate = (url: string) => {
  const navigate = useNavigate();

  navigate(url);
};
