import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  position: relative;
  padding: 16px;

  @media screen and (min-width: ${tablet}) {
    padding: 20px 32px;
  }
  @media screen and (min-width: ${desktop}) {
    padding: 24px 128px;
  }
`;

export const NavWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${desktop}) {
    display: flex;
  }
`;

export const ModalDiv = styled.div`
  display: flex;
`;

export const WrapperRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-direction: row;
  @media screen and (min-width: ${tablet}) {
    gap: 16px;
  }
`;

export const NameText = styled.p`
  color: #121417;
  display: none;
  font-family: "Medium";
  font-size: 16px;
  line-height: normal;
  @media screen and (min-width: ${mobile}) {
    display: block;
  }
  @media screen and (min-width: ${tablet}) {
    font-size: 20px;
  }
`;

export const SvgWrapper = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 30px;
  display: none;
  background: #85aa9f;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: ${mobile}) {
    display: flex;
  }
  @media screen and (min-width: ${tablet}) {
    width: 48px;
    height: 48px;
  }
`;

export const SvgUser = styled.svg`
  width: 20px;
  height: 20px;
  stroke: rgba(251, 251, 251, 1);
  fill: rgba(251, 251, 251, 1);
  @media screen and (min-width: ${tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const BtnLogOut = styled.button`
  background-color: transparent;
  border: none;
  display: none;
  @media screen and (min-width: ${desktop}) {
    display: flex;
    align-items: center;
    color: #121417;
    font-family: "Medium";
    font-size: 16px;
    line-height: normal;
  }
`;

export const SvgLogOut = styled.svg`
  stroke: rgba(18, 20, 23, 1);
  fill: rgba(18, 20, 23, 1);
  width: 32px;
  height: 22px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    stroke: rgba(18, 20, 23, 0.5);
    fill: rgba(18, 20, 23, 0.7);
    transition: all 250ms linear;
  }
  @media screen and (min-width: ${tablet}) {
    width: 40px;
    height: 28px;
  }
`;

export const BtnBurger = styled.button`
  background-color: transparent;
  border: none;
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const SvgBurger = styled.svg`
  stroke: rgba(18, 20, 23, 1);
  fill: rgba(18, 20, 23, 1);
  width: 32px;
  height: 22px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    stroke: rgba(18, 20, 23, 0.5);
    fill: rgba(18, 20, 23, 0.7);
    transition: all 250ms linear;
  }
  @media screen and (min-width: ${tablet}) {
    width: 40px;
    height: 28px;
  }
`;

export const MenuHeader = styled.div`
  display: block;
  width: 185px;
  min-height: 100vh;
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  background: #85aa9f;
  padding: 15px 16px;
  @media screen and (min-width: ${tablet}) {
    width: 300px;
    padding: 30px 32px;
  }
  @media screen and (min-width: ${desktop}) {
    display: none;
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const NameTextBurger = styled.p`
  color: #fcfcfc;

  font-family: "Medium";
  font-size: 20px;
  line-height: normal;
  margin-right: 8px;
  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
  }
`;

export const SvgWrapperBurger = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 30px;
  background: #fcfcfc;
  justify-content: center;
  align-items: center;
  display: flex;
  @media screen and (min-width: ${tablet}) {
    width: 48px;
    height: 48px;
  }
`;

export const SvgUserBurger = styled.svg`
  width: 18px;
  height: 18px;
  stroke: rgba(133, 170, 159, 1);
  fill: rgba(133, 170, 159, 1);
  cursor: pointer;
  @media screen and (min-width: ${tablet}) {
    width: 24px;
    height: 24px;
  }
`;

export const BtnBurgerClose = styled.button`
  background-color: transparent;
  border: none;
  margin-left: auto;
`;

export const SvgBurgerClose = styled.svg`
  stroke: rgba(252, 252, 252, 1);
  fill: rgba(252, 252, 252, 1);
  width: 40px;
  height: 40px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    stroke: rgba(252, 252, 252, 0.5);
    fill: rgba(252, 252, 252, 0.5);
    transition: all 250ms linear;
  }
`;

export const WrapBurgerLogOut = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 60px;
  @media screen and (min-width: ${tablet}) {
    margin-top: 30px;
    margin-bottom: 120px;
  }
`;

export const BtnLogOutBurger = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: #fcfcfc;
  font-family: "Medium";
  font-size: 16px;
  line-height: normal;
`;

export const SvgLogOutBurger = styled.svg`
  stroke: rgba(252, 252, 252, 1);
  fill: rgba(252, 252, 252, 1);
  width: 32px;
  height: 22px;
  transition: all 250ms linear;
  &:hover,
  &:focus {
    stroke: rgba(252, 252, 252, 0.5);
    fill: rgba(252, 252, 252, 0.5);
    transition: all 250ms linear;
  }
  @media screen and (min-width: ${tablet}) {
    width: 40px;
    height: 28px;
  }
`;

export const BurgerPicture = styled.picture`
  width: 100%;
  height: 100%;
  position: absolute;
  right: 0;
`;
