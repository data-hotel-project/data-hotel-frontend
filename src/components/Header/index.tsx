import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import { MenuContainer, StyledHeader, ToggleButton } from "./style";
import { useAuth } from "../../contexts/AuthContext";

interface iHeaderProps {
  isLogout?: boolean;
}

const Header = ({ isLogout }: iHeaderProps) => {
  const { userLogout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <StyledHeader>
      <ToggleButton onClick={toggleMenu}>
        <FontAwesomeIcon
          icon={faBars}
          style={{ color: "var(--primary-light)" }}
        />
      </ToggleButton>
      <MenuContainer open={menuOpen}>
        {!isLogout ? (
          <>
            <Link to={"/login"}>
              <Button
                size="medium"
                fontColorHover="var(--secondary-normal-hover)"
                backgroundColorHover="var(--primary-dark-hover)"
              >
                Login
              </Button>
            </Link>
            <Link to={"/register"}>
              <Button
                size="medium"
                fontColorHover="var(--secondary-normal-hover)"
                backgroundColorHover="var(--primary-dark-hover)"
              >
                Register
              </Button>
            </Link>
            <Link to={"/hotels"}>
              <Button
                size="medium"
                fontColorHover="var(--secondary-normal-hover)"
                backgroundColorHover="var(--primary-dark-hover)"
              >
                Hotels
              </Button>
            </Link>
          </>
        ) : (
          <Button size="medium" onClick={() => userLogout()}>
            Logout
          </Button>
        )}
      </MenuContainer>
      <h3>DATA HOTEL</h3>
    </StyledHeader>
  );
};

export default Header;
