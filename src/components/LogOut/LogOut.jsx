import { useDispatch } from "react-redux";
import sprite from "../../assets/icons/sprite.svg";
import * as s from "./LogOut.styled";
import { logOutThunk } from "../../redux/auth/operations";

const LogOut = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutThunk());
  };

  return (
    <s.Button type="button" onClick={handleClick}>
      Log out
      <svg width={16} height={16}>
        <use href={`${sprite}#arrow-one`} />
      </svg>
    </s.Button>
  );
};

export default LogOut;
