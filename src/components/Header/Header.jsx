import LogOut from "../LogOut/LogOut";
import Logo from "../Logo/Logo";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";
import * as s from "./Header.styled";

const Header = () => {
  return (
    <s.Wrapper>
      <Logo />
      <UserNav />
      <UserBar />
      <LogOut />
    </s.Wrapper>
  );
};

export default Header;
