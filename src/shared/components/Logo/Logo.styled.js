import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

export const LogoSvg = styled.svg`
  width: 36px;
  height: 36px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    width: 40px;
    height: 40px;
  }
`;
export const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  max-width: 280px;
  transition: all 250ms linear;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
export const LogoText = styled.p`
  color: #121417;
  margin-left: 8px;
  font-family: "Bold";
  font-size: 18px;
  line-height: 1.45;
  @media screen and (min-width: ${breakpoints.tablet}) {
    font-size: 22px;
    margin-left: 16px;
  }
`;
