import { userNav } from "../../helpers/dataText";
import * as s from "./UserNav.styled";

const UserNav = () => {
  return (
    <s.Navigation>
      {userNav.map((item) => (
        <s.NavBtn key={item.id} to={item.to}>
          {item.text}
        </s.NavBtn>
      ))}
    </s.Navigation>
  );
};

export default UserNav;
