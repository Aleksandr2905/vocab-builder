import { StyledNav, NavItem, NavDiv } from "./Navigation.styled";

const Navigation = () => {
  return (
    <>
      <StyledNav>
        <NavDiv>
          <NavItem to="/home/dictionary" replace>
            Dictionary
          </NavItem>
          <NavItem to="/home/recommend" replace>
            Recommend
          </NavItem>
          <NavItem to="/training" replace>
            Training
          </NavItem>
        </NavDiv>
      </StyledNav>
    </>
  );
};
export default Navigation;
