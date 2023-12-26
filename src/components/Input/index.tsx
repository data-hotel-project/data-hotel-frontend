import { Eye, EyeSlash } from "phosphor-react";
import { ReactNode, useState } from "react";
import { ErrorMessage } from "../ParagraphError";
import InputGroup from "./inputGroup";
import { iInputProps } from "../../interface";

const Input = ({
  errorMessage,
  errors,
  getValues,
  id,
  label,
  login,
  register,
  type,
  showPass,
  defaultValue,
  ...rest
}: iInputProps) => {
  // Destructuring the register
  const { onChange, onBlur, name, ref } = register(id);

  const inputValue =
    getValues(id) && type !== "number"
      ? getValues(id)
      : getValues(id) && type === "number"
      ? Number(getValues(id))
      : type === "number"
      ? 0
      : "";

  // States
  const [value, setValue] = useState(defaultValue ? defaultValue : inputValue);
  const [show, setShow] = useState(false);
  const [passType, setPassType] = useState("password");

  // Validations
  const className =
    !errors &&
    login &&
    ((type === "number" && value !== 0) || (type !== "number" && value !== ""))
      ? "done"
      : errors
      ? "error"
      : !errors &&
        ((type === "number" && value !== 0) ||
          (type !== "number" && value !== ""))
      ? "sucess"
      : "";

  const inputType = showPass ? passType : type;

  // functions
  const showPassword = (showPass: boolean): ReactNode => {
    if (
      ((type === "number" && value !== 0) ||
        (type !== "number" && value !== "")) &&
      showPass
    ) {
      const whichEye =
        show === false ? (
          <EyeSlash size={22} color="#030303" />
        ) : (
          <Eye size={22} color="#030303" />
        );
      const passType = show === false ? "text" : "password";
      return (
        <div
          className="showPass"
          onClick={() => {
            setShow(!show);
            setPassType(passType);
          }}
          role="button"
        >
          {whichEye}
        </div>
      );
    }
  };

  return (
    <InputGroup className={className} $inputValue={value} {...rest}>
      <input
        autoComplete="off"
        id={id}
        value={value}
        type={inputType}
        onChange={(e) => {
          if (type === "text" || type === "password") {
            setValue(e.target.value);
          } else {
            setValue(Number(e.target.value));
          }
          onChange(e);
        }}
        onBlur={onBlur}
        name={name}
        ref={ref}
        {...rest}
      />
      <label>{label}</label>
      {showPass ? showPassword(showPass) : null}
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </InputGroup>
  );
};

export default Input;
