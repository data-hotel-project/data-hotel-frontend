import { RiErrorWarningFill } from "react-icons/ri";
import { ParagraphError } from "./style";
import { IChildrenProps } from "../../assets/interface";

export const ErrorMessage = ({ children }: IChildrenProps) => {
  return (
    <ParagraphError>
      {children && <RiErrorWarningFill />}
      {children}
    </ParagraphError>
  );
};
