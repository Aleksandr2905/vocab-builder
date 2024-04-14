import LoginForm from "../../components/LoginForm/LoginForm";
import Logo from "../../components/Logo/Logo";
import { loginText } from "../../helpers/dataText";
import * as s from "./LoginPage.styled";

const LoginPage = () => {
  return (
    <s.Section>
      <Logo />
      <s.Img />
      <s.Categories>{loginText.categories}</s.Categories>
      <LoginForm />
    </s.Section>
  );
};

export default LoginPage;
