import { useSelector } from "react-redux";
import LogOut from "../LogOut/LogOut";
import Logo from "../Logo/Logo";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";
import * as s from "./Header.styled";
import { selectIsLoggedIn } from "../../redux/selectors";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <s.Wrapper>
      {isLoggedIn && (
        <>
          <Logo />
          <UserNav />
          <UserBar />
          <LogOut />
        </>
      )}
    </s.Wrapper>
  );
};

export default Header;
