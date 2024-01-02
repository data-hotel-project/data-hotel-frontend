import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Background from "../../components/Background";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useGuest } from "../../contexts/GuestContext";
import {
  TGuestFormData,
  guestSchemaForm,
} from "../../validators/guestValidators";
import { StyledBody } from "./style";

const GuestRegister = () => {
  const { createGuest } = useGuest();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<TGuestFormData>({
    resolver: zodResolver(guestSchemaForm),
  });

  const onSubmit = async (data: TGuestFormData) => {
    await createGuest(data);
  };

  return (
    <Background>
      <StyledBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="name">DATA HOTEL</h2>
          <div className="box">
            <div className="body">
              <div className="box-info">
                <h2>Register</h2>
                <div className="info">
                  <div className="info-part1">
                    <Input
                      label="Username"
                      type="text"
                      errorMessage={errors.username?.message}
                      register={register}
                      id="username"
                      getValues={getValues}
                    />
                    <Input
                      label="E-mail"
                      type="email"
                      errorMessage={errors.email?.message}
                      register={register}
                      id="email"
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
                    <Input
                      label="Confirm Password"
                      type="password"
                      errorMessage={errors.password_confirmation?.message}
                      register={register}
                      id="password_confirmation"
                      getValues={getValues}
                      showPass={true}
                    />
                    <Input
                      label="Birthdate date"
                      type="date"
                      errorMessage={errors.birthdate?.message}
                      register={register}
                      id="birthdate"
                      getValues={getValues}
                    />
                  </div>
                  <div className="info-part2">
                    <Input
                      label="Nationality"
                      type="text"
                      errorMessage={errors.nationality?.message}
                      register={register}
                      id="nationality"
                      getValues={getValues}
                    />
                    <Input
                      label="Contact"
                      type="text"
                      errorMessage={errors.contact?.message}
                      register={register}
                      id="contact"
                      getValues={getValues}
                    />
                    <Input
                      label="Emergency contact"
                      type="text"
                      errorMessage={errors.emergency_num?.message}
                      register={register}
                      id="emergency_num"
                      getValues={getValues}
                    />
                    <Input
                      label="Aditional contact"
                      type="text"
                      errorMessage={errors.aditional_contact?.message}
                      register={register}
                      id="aditional_contact"
                      getValues={getValues}
                    />
                  </div>
                </div>
              </div>
              <div className="box-address">
                <div className="address">
                  <h2>Address</h2>
                  <Input
                    label="Street"
                    type="text"
                    errorMessage={errors.address?.street?.message}
                    register={register}
                    id="address.street"
                    getValues={getValues}
                  />
                  <div className="address2">
                    <Input
                      label="Number"
                      type="text"
                      errorMessage={errors.address?.number?.message}
                      register={register}
                      id="address.number"
                      getValues={getValues}
                    />
                    <Input
                      label="City"
                      type="text"
                      errorMessage={errors.address?.city?.message}
                      register={register}
                      id="address.city"
                      getValues={getValues}
                    />
                  </div>

                  <div className="address2">
                    <Input
                      label="State"
                      type="text"
                      errorMessage={errors.address?.state?.message}
                      register={register}
                      id="address.state"
                      getValues={getValues}
                    />
                    <Input
                      label="Complement"
                      type="text"
                      errorMessage={errors.address?.complement?.message}
                      register={register}
                      id="address.complement"
                      getValues={getValues}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="foot">
              <div className="links">
                <a href="/login">Already have account?</a>
                <a href="/">Back</a>
              </div>
              <Button size={"medium"} backgroundColor={"black"}>
                Register
              </Button>
            </div>
          </div>
        </form>
      </StyledBody>
    </Background>
  );
};

export default GuestRegister;
