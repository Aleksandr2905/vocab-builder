import { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/auth/operations";
import { Formik, ErrorMessage } from "formik";
import sprite from "../../images/symbol-defs.svg";
import * as s from "../Login/Login.styled";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../../../helpers/validation";

const Registration = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (values, { resetForm }) => {
    dispatch(signup(values))
      .unwrap()
      .then(() => navigate("/home/recommend"))
      .then(() => resetForm());
  };

  return (
    <>
      <s.WrapperForm>
        <s.AuthWrapComponent>
          <s.Title>Register</s.Title>
          <s.TitleText>
            To start using our services, please fill out the registration form
            below. All fields are mandatory:
          </s.TitleText>
          <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={onSubmit}
          >
            <s.StyledFormAuth>
              <s.StyledWrapInputAuth>
                <s.StyledInputAuth type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name">
                  {(m) => <s.StyledErrorAuth>{m}</s.StyledErrorAuth>}
                </ErrorMessage>
              </s.StyledWrapInputAuth>

              <s.StyledWrapInputAuth>
                <s.StyledInputAuth
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage name="email">
                  {(m) => <s.StyledErrorAuth>{m}</s.StyledErrorAuth>}
                </ErrorMessage>
              </s.StyledWrapInputAuth>

              <s.StyledWrapInputAuth>
                <s.StyledInputAuth
                  className="no-bottom-padding"
                  name="password"
                  placeholder="Password"
                  type={showPassword ? "text" : "password"}
                />
                <ErrorMessage name="password">
                  {(m) => <s.StyledErrorAuth>{m}</s.StyledErrorAuth>}
                </ErrorMessage>
                <s.AuthFormPasswordIcon onClick={handleTogglePassword}>
                  {showPassword ? (
                    <s.StyledEyeIcon>
                      <use href={sprite + "#icon-eye"}></use>
                    </s.StyledEyeIcon>
                  ) : (
                    <s.StyledEyeIconVis>
                      <use href={sprite + "#icon-eye-off"}></use>
                    </s.StyledEyeIconVis>
                  )}
                </s.AuthFormPasswordIcon>
              </s.StyledWrapInputAuth>
              <s.StyledWrapAuthBtn>
                <s.StyledBtnAuthAccent type="submit" disabled={isLoading}>
                  Register
                </s.StyledBtnAuthAccent>
              </s.StyledWrapAuthBtn>
              <s.LinkItem to="/login">Login</s.LinkItem>
            </s.StyledFormAuth>
          </Formik>
        </s.AuthWrapComponent>
      </s.WrapperForm>
    </>
  );
};

export default Registration;
