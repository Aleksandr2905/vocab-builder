import styled from "styled-components";
import { breakpoints } from "../../shared/components/styles/breakpoints";

export const LogoWrap = styled.div`
  padding: 16px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    padding: 0;
  }
`;
export const WrapperMain = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media screen and (min-width: ${breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    @media screen and (min-width: ${breakpoints.tablet}) {
      flex-direction: column;
    }
    @media screen and (min-width: ${breakpoints.desktop}) {
      flex-direction: row;
    }
  }
`;

export const WelcomePicture = styled.picture`
  width: 247px;
  height: 191px;
  margin-top: 20px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 498px;
    height: 435px;
    display: flex;
  }
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 16px;
  padding-bottom: 23px;
  @media screen and (min-width: ${breakpoints.mobile}) {
    padding-bottom: 43px;
  }
`;
export const TextRegister = styled.p`
  display: none;
  @media screen and (min-width: ${breakpoints.tablet}) {
    color: rgba(18, 20, 23, 0.8);
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
    margin-top: 16px;
    display: block;
  }
`;

export const WelcomeImg = styled.img`
  width: 247px;
  height: 191px;
  @media screen and (min-width: ${breakpoints.tablet}) {
    display: none;
  }
  @media screen and (min-width: ${breakpoints.desktop}) {
    width: 498px;
    height: 435px;
    display: block;
  }
`;

export const PictureWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
