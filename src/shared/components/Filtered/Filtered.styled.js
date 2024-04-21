import styled from "styled-components";
import Select from "react-select";
import { breakpoints } from "../styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const SelectStyled = styled(Select)``;

export const TextFilter = styled.input`
  font-family: "Medium";
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: calc(100vw - 24px);
  border: 1px solid rgba(18, 20, 23, 0.1);
  max-width: 375px;

  &::placeholder {
    font-family: "Medium";
    color: #121417;
  }
  &:hover,
  &:focus,
  &.active {
    border-radius: 15px;
    border: 1px solid #85aa9f;
    outline: none;
  }
  @media screen and (min-width: ${tablet}) {
    width: auto;
  }
`;

export const SvgSearch = styled.svg`
  width: 20px;
  height: 20px;
  stroke: rgba(18, 20, 23, 1);
  fill: rgba(18, 20, 23, 0);
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background: transparent;
  &:hover,
  &:focus {
    opacity: 0.4;
    outline: none;
  }
`;

export const Label = styled.label`
  position: relative;
`;
export const StudyDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const KeyText = styled.p`
  color: rgba(18, 20, 23, 0.5);

  font-family: "Medium";
  font-size: 14px;
  line-height: 1.5;
  @media screen and (min-width: ${tablet}) {
    font-size: 16px;
  }
`;
export const ValueText = styled.p`
  color: #121417;

  font-family: "Medium";
  font-size: 20px;
  line-height: 1.5;
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  @media screen and (min-width: ${tablet}) {
    align-items: center;
    flex-direction: row;
    gap: 16px;
  }
`;
export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    align-items: center;
  }
`;
export const WrapAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media screen and (min-width: ${tablet}) {
    justify-content: space-between;

    align-items: flex-start;
    gap: 28px;
  }
  @media screen and (min-width: ${desktop}) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const WrapRightBtn = styled.div`
  display: flex;
  gap: 6px;
`;

export const StyledRadio = styled.input`
  appearance: none;
  margin: 0;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(18, 20, 23, 0.2);
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  box-sizing: border-box;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 11px;
    height: 11px;
    margin: 2px;
  }
  &:checked::after {
    background-color: rgba(133, 170, 159, 1);
  }
  &:hover::after {
    background-color: rgba(133, 170, 159, 1);
  }
  &:focus {
    border: 2px solid rgba(133, 170, 159, 1);
    outline: none;
  }
`;
export const StyledLabel = styled.label`
  color: #121417;
  display: flex;
  font-family: "Regular";
  font-size: 14px;
  line-height: normal;
  cursor: pointer;
  align-items: center;

  gap: 8px;
`;
export const WrapRadioBtn = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
