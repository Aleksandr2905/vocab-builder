import sprite from "../../images/symbol-defs.svg";
import { LogoLink, LogoSvg, LogoText } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoSvg>
        <use href={sprite + "#icon-logo"}></use>
      </LogoSvg>
      <LogoText>VocabBuilder</LogoText>
    </LogoLink>
  );
};

export default Logo;
