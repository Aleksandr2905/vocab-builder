import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../helpers/validation";
import InputForm from "../InputForm/InputForm";
import * as s from "./LoginForm.styled";
import { loginText } from "../../helpers/dataText";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  const email = watch("email");
  const password = watch("password");

  const onSubmit = (data) => {
    dispatch(loginThunk(data)).then((response) => {
      if (!response.error) {
        navigate("/dictionary");
      }
    });
  };

  return (
    <s.Wrapper>
      <s.Title>{loginText.title}</s.Title>
      <s.Description>{loginText.description}</s.Description>
      <s.Forma onSubmit={handleSubmit(onSubmit)}>
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
        <s.Button type="submit">Login</s.Button>
      </s.Forma>
      <s.LinkBtn to="/register">Register</s.LinkBtn>
    </s.Wrapper>
  );
};

export default LoginForm;
