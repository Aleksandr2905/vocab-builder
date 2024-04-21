import styled from "styled-components";
import { breakpoints } from "../styles/breakpoints";

const { mobile, tablet, desktop } = breakpoints;

export const LabelTranslate = styled.label``;

export const InputTranslate = styled.input`
  background: transparent;
  border: none;
  outline: none;

  align-items: center;
  display: flex;
  gap: 10px;
  border-radius: 8px 0px 0px 0px;

  background: #fcfcfc;
  color: #121417;

  font-family: "Medium";
  font-size: 20px;
  line-height: 1.5;
  height: 195px;
  max-width: 260px;
  border-bottom: 1px solid #dbdbdb;
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }

  &::placeholder {
    color: #121417;
    font-family: "Medium";
    font-size: 20px;
    line-height: 1.5;
  }

  @media screen and (min-width: 420px) {
    height: 195px;
    width: 403px;
  }

  @media screen and (min-width: ${tablet}) {
    height: 260px;
    width: calc(1240px / 2 - 22px);
    max-height: 260px;
    max-width: calc(1240px / 2 - 22px);
  }
  @media screen and (min-width: ${desktop}) {
    height: 338px;
    border-bottom: none;
    border-right: 1px solid #dbdbdb;
    width: calc(1240px / 2 - 22px);
  }
`;
export const WrapTrainingRoom = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const WrapTranslator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 410px;
  max-width: 280px;
  gap: 0;
  padding: 10px;
  background: #fcfcfc;
  border-radius: 8px;
  @media screen and (min-width: ${tablet}) {
    max-width: 704px;
    height: 560px;
    padding: 22px;
  }

  @media screen and (min-width: ${desktop}) {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 1240px;
    max-width: 1240px;
    height: 338px;
    gap: 0;
    padding: 22px;
    background: #fcfcfc;
    border-radius: 8px;
  }
`;
export const WrapLang = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  position: absolute;
  top: 11px;
  right: 22px;
`;
export const WrapBtn = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-top: 20px;

  @media screen and (min-width: ${tablet}) {
    margin-top: 80px;
    flex-direction: row;
  }
`;
export const WrapInput = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  position: relative;
`;
export const TaskWord = styled.p`
  color: #121417;

  font-family: "Medium";
  font-size: 20px;
  line-height: 1.5;
`;
export const SvgMap = styled.svg`
  width: 32px;
  height: 32px;
`;
export const SvgArrow = styled.svg`
  width: 20px;
  height: 20px;
  stroke: rgba(133, 170, 159, 1);
  fill: rgba(133, 170, 159, 1);
`;
export const BtnNext = styled.button`
  background: transparent;
  border: none;
  outline: none;
  color: rgba(18, 20, 23, 0.5);
  font-family: "Medium";
  font-size: 16px;
  line-height: normal;
  display: flex;
  align-items: flex-start;
  position: absolute;
  bottom: 11px;
  left: 0;
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
`;
export const BtnAdd = styled.button`
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  padding: 14px 80px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #85aa9f;
  color: #fcfcfc;
  font-family: "SemiBold";
  font-size: 18px;
  line-height: 1.55;
  min-width: 280px;
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
  @media screen and (min-width: ${tablet}) {
    min-width: auto;
  }
`;
export const BtnCancel = styled.button`
  background: transparent;
  border: none;
  outline: none;
  display: flex;
  padding: 14px 71px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #85aa9f;
  color: #85aa9f;
  font-family: "SemiBold";
  font-size: 18px;
  line-height: 1.55;
  min-width: 280px;
  @media screen and (min-width: ${tablet}) {
    min-width: auto;
  }
  &:hover,
  &:focus {
    opacity: 0.4;
    transition: all 250ms linear;
  }
`;
export const TextLang = styled.p`
  color: #121417;
  font-family: "Medium";
  font-size: 16px;
  line-height: 1.5;
`;
