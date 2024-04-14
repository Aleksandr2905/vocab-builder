import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../helpers/validation";
import InputForm from "../InputForm/InputForm";
import * as s from "./RegisterForm.styled";
import { registerText } from "../../helpers/dataText";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registerSchema),
  });

  const username = watch("name");
  const email = watch("email");
  const password = watch("password");

  const onSubmit = (data) => {
    dispatch(registerThunk(data)).then((response) => {
      if (!response.error) {
        navigate("/dictionary");
      }
    });
  };

  return (
    <s.Wrapper>
      <s.Title>{registerText.title}</s.Title>
      <s.Description>{registerText.description}</s.Description>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
        <InputForm
          name="name"
          type="text"
          placeholder="Name"
          register={register}
          errors={errors}
          touched={touchedFields.name}
          isValid={!errors.name && username}
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
