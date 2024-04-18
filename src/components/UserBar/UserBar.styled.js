import styled from "styled-components";
import { variables } from "../../stylesheet/variebles";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-family: ${variables.fonts.medium};
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  color: ${variables.color.textPrimary};
`;

export const WrapIcon = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  background: ${variables.color.accent};
`;
