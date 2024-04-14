import styled from "styled-components";
import { variables } from "../../stylesheet/variebles";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 16px;
  padding: 32px 16px;
  border-radius: 25px 25px 0px 0px;
  background-color: ${variables.color.bgLight};
`;

export const Title = styled.h1`
  font-family: ${variables.fonts.semiBold};
  font-size: 30px;
  font-weight: 600;
  line-height: 1.07;
  letter-spacing: -0.6px;
  color: ${variables.color.textPrimary};
`;

export const Description = styled.p`
  font-family: ${variables.fonts.regular};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${variables.color.textSecondary};
`;

export const Forma = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 16px 139px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  font-family: ${variables.fonts.bold};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  border: none;
  margin-top: 18px;
  transition: ${variables.animation.transition};
  background-color: ${variables.color.accent};
  color: ${variables.color.buttonWhite};

  &:hover {
    background-color: ${variables.color.accentLight};
  }

  &:focus {
    background-color: ${variables.color.accentLight};
  }
`;

export const LinkBtn = styled(Link)`
  text-align: center;
  font-family: ${variables.fonts.bold};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5;
  text-decoration-line: underline;
  color: ${variables.color.linkBtn};
`;
