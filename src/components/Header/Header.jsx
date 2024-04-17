import Logo from "../Logo/Logo";
import UserBar from "../UserBar/UserBar";
import UserNav from "../UserNav/UserNav";

const Header = () => {
  return (
    <div>
      <Logo />
      <UserNav />
      <UserBar />
    </div>
  );
};

export default Header;
