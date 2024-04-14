import sprite from "../../assets/icons/sprite.svg";
import * as s from "./Logo.styled";

const Logo = () => {
  return (
    <s.Wrapper>
      <s.Icon width={36} height={36}>
        <use href={`${sprite}#logo`} />
      </s.Icon>
      <s.LogoText>VocabBuilder</s.LogoText>
    </s.Wrapper>
  );
};

export default Logo;
