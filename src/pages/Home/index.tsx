import Header from "../../components/Header";
import Input from "../../components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledBody, StyledH1 } from "./style";

export const Home = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<any>({});

  const onSubmit: SubmitHandler<any> = async (formData) => {
    console.log(formData);
  };

  return (
    <>
        <Header />
        <StyledBody>
          <StyledH1>GRAND DATA HOTEL</StyledH1>
        </StyledBody>
      {/* <h2>Home</h2> */}
      {/* <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "50px",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Input
            id="name"
            label="Nome"
            register={register}
            type="text"
            errors={errors.name}
            getValues={getValues}
          />
        </div>

        <button style={{ marginTop: "10px", marginLeft: 10 }} type="submit">
          Cadastre-se
        </button>
      </form> */}
    </>
  );
};
