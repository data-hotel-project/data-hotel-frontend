import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Background from "../../components/Background";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useEmployee } from "../../contexts/EmployeeContext";
import { useGuest } from "../../contexts/GuestContext";
import { iLoginRequest } from "../../assets/interface";
import { authSchemaLogin } from "../../validators/authValidators";
import { BoxIsEmployee, StyledBody } from "./style";

const Login = () => {
  const { loginGuest } = useGuest();
  const { loginEmployee } = useEmployee();
  const [isEmployee, setIsEmployee] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<iLoginRequest>({
    resolver: zodResolver(authSchemaLogin),
  });

  const onSubmit = async (data: iLoginRequest) => {
    isEmployee ? await loginEmployee(data) : await loginGuest(data);
  };

  return (
    <Background>
      <StyledBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="name">DATA HOTEL</h2>
          <div className="box">
            <h2>Login</h2>
            <Input
              label="E-mail | Username"
              type="text"
              errorMessage={errors.username?.message}
              register={register}
              id="username"
              getValues={getValues}
            />
            <Input
              label="Password"
              type="password"
              errorMessage={errors.password?.message}
              register={register}
              id="password"
              getValues={getValues}
              showPass={true}
            />
            <div className="links">
              <a href="/">Home</a>
              <a href="/register">Still don't have account?</a>
            </div>

            <Button size={"medium"} backgroundColor={"black"}>
              Login
            </Button>
          </div>
        </form>
        <BoxIsEmployee $isEmployee={isEmployee}>
          <div
            className="boxCondition"
            onClick={() => setIsEmployee(!isEmployee)}
          >
            <div className="condition"></div>
          </div>
          <h4>IsEmployee?</h4>
        </BoxIsEmployee>
      </StyledBody>
    </Background>
  );
};

export default Login;
