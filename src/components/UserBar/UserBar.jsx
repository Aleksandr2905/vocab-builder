import { useSelector } from "react-redux";
import Icon from "../Icon/Icon";
import { variables } from "../../stylesheet/variebles";
import * as s from "./UserBar.styled";
import { selectName } from "../../redux/selectors";

const UserBar = () => {
  const name = useSelector(selectName);

  return (
    <s.Wrapper>
      <s.Name>{name}</s.Name>
      <s.WrapIcon>
        <Icon
          iconName="user"
          width={20}
          height={20}
          fill={`${variables.color.buttonWhite}`}
        />
      </s.WrapIcon>
    </s.Wrapper>
  );
};

export default UserBar;
