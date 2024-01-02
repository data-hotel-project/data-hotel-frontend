import { IChildrenProps } from "../../assets/interface";
import { StyledBackground, StyledShadow } from "./style";

const Background = ({ children }: IChildrenProps) => {
  return (
    <StyledBackground>
      <StyledShadow />
      {children}
    </StyledBackground>
  );
};

export default Background;
