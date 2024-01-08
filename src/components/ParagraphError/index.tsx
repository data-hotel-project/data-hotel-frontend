import { IChildrenProps } from "@interface/index";
import { RiErrorWarningFill } from "react-icons/ri";
import { ParagraphError } from "./style";

export const ErrorMessage = ({ children }: IChildrenProps) => {
  return (
    <ParagraphError>
      {children && <RiErrorWarningFill />}
      {children}
    </ParagraphError>
  );
};
