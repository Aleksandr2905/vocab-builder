import { NavLink } from "react-router-dom";
import { userNav } from "../../helpers/dataText";

const UserNav = () => {
  return (
    <nav>
      {userNav.map((item) => (
        <NavLink key={item.id} to={item.to}>
          {item.text}
        </NavLink>
      ))}
    </nav>
  );
};

export default UserNav;
