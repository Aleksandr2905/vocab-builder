import { useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./InputForm.styled";

const InputForm = ({
  name,
  placeholder,
  register,
  errors,
  isValid,
  touched,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const getInputType = () => {
    if (name === "password") {
      return showPassword ? "text" : "password";
    } else {
      return name === "email" ? "email" : "text";
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <s.Wrapper>
      <s.Input
        name={name}
        type={getInputType()}
        placeholder={placeholder}
        {...register(name)}
        $errors={errors[name]}
        $isValid={touched && isValid}
      />
      <s.ErrorText>{errors[name]?.message}</s.ErrorText>
      {touched && isValid && <s.SuccessText>Success {name}</s.SuccessText>}
      {name === "password" && (
        <s.Eyes width="20" height="20" onClick={togglePasswordVisibility}>
          <use href={`${sprite}#${showPassword ? "eye" : "eye-off"}`} />
        </s.Eyes>
      )}
    </s.Wrapper>
  );
};

export default InputForm;
