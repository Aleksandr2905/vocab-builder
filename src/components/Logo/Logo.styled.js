import styled from "styled-components";
import { variables } from "../../stylesheet/variebles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Icon = styled.svg`
  width: 36px;
  height: 36px;
`;

export const LogoText = styled.p`
  font-family: ${variables.fonts.semiBold};
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  color: ${variables.color.textPrimary};
`;
