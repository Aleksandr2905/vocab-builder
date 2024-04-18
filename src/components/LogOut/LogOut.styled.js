import styled from "styled-components";
import { variables } from "../../stylesheet/variebles";

export const Button = styled.button`
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  transition: ${variables.animation.transition};
  font-family: ${variables.fonts.medium};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: ${variables.color.textPrimary};

  & svg {
    transition: ${variables.animation.transition};
    stroke: ${variables.color.textPrimary};
  }

  &:hover {
    color: ${variables.color.textPrimary50};

    & svg {
      stroke: ${variables.color.textPrimary50};
    }
  }
`;
