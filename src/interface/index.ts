import { ReactNode } from "react";
import { Path, UseFormGetValues, UseFormRegister } from "react-hook-form";

export interface IChildrenProps {
  children: ReactNode;
}

export interface iLoginRequest {
  username: string;
  password: string;
}

export interface iInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "defaultValue"> {
  errorMessage?: string;
  errors?: any;
  getValues: UseFormGetValues<any>;
  id: Path<any>;
  label: string;
  login?: boolean;
  register: UseFormRegister<any>;
  type: string;
  showPass?: boolean;
  defaultValue?: string | number | readonly string[] | null | undefined;
}

export interface iButtonStyledProps {
  $backgroundColor?: string;
  size: "big" | "medium" | "small";
  $fontColor?: string;
  $borderColor?: string;
  $backgroundColorHover?: string;
  $borderColorHover?: string;
  $fontColorHover?: string;
}
