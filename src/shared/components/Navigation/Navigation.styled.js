import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { breakpoints } from "../styles/breakpoints";

const { tablet, desktop } = breakpoints;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
  }
  @media screen and (min-width: ${desktop}) {
    align-items: center;
  }
`;

export const NavDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (min-width: ${desktop}) {
    align-items: center;
    flex-direction: row;
    gap: 8px;
  }
`;

export const NavItem = styled(NavLink)`
  font-family: "Medium";
  color: #fcfcfc;
  font-size: 14px;
  padding: 12px 0px;
  line-height: normal;
  border-radius: 15px;
  cursor: pointer;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    color: #121417;
    background: #fcfcfc;
    transition: all 250ms linear;
    padding: 12px 20px;
  }
  &.active {
    color: #121417;
    background: #fcfcfc;
    padding: 12px 20px;
  }
  @media screen and (min-width: ${desktop}) {
    color: #121417;
    padding: 12px 20px;
    transition: all 250ms linear;
    &:hover,
    &:focus {
      color: #fcfcfc;
      background: #85aa9f;
      transition: all 250ms linear;
    }
    &.active {
      color: #fcfcfc;
      background: #85aa9f;
    }
  }
`;
