import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Formik, ErrorMessage } from "formik";
import * as yup from "yup";

import sprite from "../../images/symbol-defs.svg";
import { signin } from "../../../redux/auth/operations.js";

import {
  StyledInputAuth,
  StyledFormAuth,
  StyledBtnAuthAccent,
  StyledWrapInputAuth,
  StyledLabelAuth,
  StyledErrorAuth,
  StyledWrapAuthBtn,
  AuthWrapComponent,
  WrapperForm,
  AuthFormPasswordIcon,
  StyledEyeIcon,
  StyledEyeIconVis,
  Title,
  TitleText,
  LinkItem,
} from "./Login.styled.js";

let schema = yup.object({
  password: yup
    .string()
    .required("Please enter a password")
    .min(7, "Min length 7 symbols")
    .max(7, "Max length 7 symbols")
    .matches(
      /^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,
      "6 English letters and 1 number"
    )
    .test(
      "no-spaces",
      "Password cannot contain spaces",
      (value) => !/\s/.test(value)
    ),

  email: yup
    .string()
    .required("Please enter an email")
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Enter a valid email address"),
});

const initialValues = {
  email: "",
  password: "",
  showPassword: false,
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(signin({ email, password }))
      .unwrap()
      .then(() => navigate("/home/dictionary"))
      .then(() => resetForm());
  };
  return (
    <>
      <WrapperForm>
        <AuthWrapComponent>
          <Title>Login</Title>
          <TitleText>
            Please enter your login details to continue using our service:
          </TitleText>
          <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={onSubmit}
          >
            <StyledFormAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="email">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
              </StyledWrapInputAuth>
              <StyledWrapInputAuth>
                <StyledInputAuth
                  className="no-bottom-padding"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />
                <StyledLabelAuth></StyledLabelAuth>
                <ErrorMessage name="password">
                  {(m) => <StyledErrorAuth>{m}</StyledErrorAuth>}
                </ErrorMessage>
                <AuthFormPasswordIcon onClick={handleTogglePassword}>
                  {showPassword ? (
                    <StyledEyeIcon>
                      <use href={sprite + "#icon-eye"}></use>
                    </StyledEyeIcon>
                  ) : (
                    <StyledEyeIconVis>
                      <use href={sprite + "#icon-eye-off"}></use>
                    </StyledEyeIconVis>
                  )}
                </AuthFormPasswordIcon>
              </StyledWrapInputAuth>
              <StyledWrapAuthBtn>
                <StyledBtnAuthAccent type="submit" disabled={isLoading}>
                  Login
                </StyledBtnAuthAccent>
              </StyledWrapAuthBtn>
              <LinkItem to="/registration">Register</LinkItem>
            </StyledFormAuth>
          </Formik>
        </AuthWrapComponent>
      </WrapperForm>
    </>
  );
};

export default Login;
