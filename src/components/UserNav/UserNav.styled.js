import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { variables } from "../../stylesheet/variebles";

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const NavBtn = styled(NavLink)`
  font-family: ${variables.fonts.medium};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  transition: ${variables.animation.transition};
  color: ${variables.color.textPrimary};

  &:hover {
    color: ${variables.color.textPrimary50};
  }

  &.active {
    color: ${variables.color.buttonWhite};
    padding: 12px 20px;
    border-radius: 15px;
    background-color: ${variables.color.accent};
  }
`;
