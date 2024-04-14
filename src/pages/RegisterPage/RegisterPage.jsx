import Logo from "../../components/Logo/Logo";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import * as s from "./RegisterPage.styled";

const RegisterPage = () => {
  return (
    <s.Section>
      <Logo />
      <s.Img />
      <RegisterForm />
    </s.Section>
  );
};

export default RegisterPage;
