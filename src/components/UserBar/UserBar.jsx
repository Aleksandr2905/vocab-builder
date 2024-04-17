import { useSelector } from "react-redux";
import { selectName } from "../../redux/auth/selectors";
import Icon from "../Icon/Icon";
import { variables } from "../../stylesheet/variebles";

const UserBar = () => {
  const name = useSelector(selectName);
  console.log(name);
  return (
    <div>
      <Icon
        iconName="user"
        width={20}
        height={20}
        fill={`${variables.color.accentLight}`}
      />
      <p>{name}</p>
    </div>
  );
};

export default UserBar;
