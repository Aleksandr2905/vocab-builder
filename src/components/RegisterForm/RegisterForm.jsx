import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../helpers/validation";
import InputForm from "../InputForm/InputForm";
import * as s from "./RegisterForm.styled";
import { registerText } from "../../helpers/dataText";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
    reset,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  const username = watch("username");
  const email = watch("email");
  const password = watch("password");

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <s.Wrapper>
      <s.Title>{registerText.title}</s.Title>
      <s.Description>{registerText.description}</s.Description>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="username"
          type="text"
          placeholder="Name"
          register={register}
          errors={errors}
          touched={touchedFields.username}
          isValid={!errors.username && username}
        />
        <InputForm
          name="email"
          type="email"
          placeholder="Email"
          register={register}
          errors={errors}
          touched={touchedFields.email}
          isValid={!errors.email && email}
        />
        <InputForm
          name="password"
          type="password"
          placeholder="Password"
          register={register}
          errors={errors}
          touched={touchedFields.password}
          isValid={!errors.password && password}
        />
        <s.Button type="submit">Register</s.Button>
      </s.Forma>
      <s.LinkBtn to="/login">Login</s.LinkBtn>
    </s.Wrapper>
  );
};

export default RegisterForm;
