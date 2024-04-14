import styled from "styled-components";
import { variables } from "../../stylesheet/variebles";
import sprite from "../../assets/icons/sprite.svg";
import error from "../../assets/icons/error.svg";
import success from "../../assets/icons/success.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 16px 18px;
  gap: 18px;
  border-radius: 15px;
  border: 1px solid
    ${(props) =>
      props.$errors
        ? variables.color.error
        : props.$isValid
        ? variables.color.success
        : variables.color.borderInput};
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  transition: ${variables.animation.transition};
  background-color: transparent;
  color: ${variables.color.textPrimary};

  &::placeholder {
    font-family: ${variables.fonts.regular};
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: ${variables.color.textPrimary};
  }

  &:hover {
    border: 1px solid ${variables.color.accent};
  }

  &:focus {
    caret-color: ${variables.color.borderInput};
    outline: 1px solid ${variables.color.accent};
    border: 1px solid ${variables.color.accent};
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-feature-settings: "clig" off, "liga" off;
  font-family: ${variables.fonts.regular};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: ${variables.color.error};

  /* &::before {
    content: url(${error});
    display: inline-block;
    margin-right: 4px;
  } */
`;

export const SuccessText = styled.p`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-feature-settings: "clig" off, "liga" off;
  font-family: ${variables.fonts.regular};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.12px;
  color: ${variables.color.success};

  /* &::before {
    content: url(${success});
    display: inline-block;
    margin-right: 4px;
  } */
`;

export const Eyes = styled.svg`
  position: absolute;
  right: 18px;
  top: 18px;
  width: 20px;
  height: 20px;
  cursor: pointer;

  & use {
    stroke: ${variables.color.textPrimary};
    fill: transparent;
  }
`;
